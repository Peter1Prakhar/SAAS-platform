import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {prismaClient} from "@/app/lib/db";
//@ts-ignore
import youtubeThumbnail from "youtube-thumbnail";
const YT_REG = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string()
})
export async function POST(req: NextRequest){
    try{
        console.log("Stream added")
        const data = CreateStreamSchema.parse(await req.json())
        var thumbnail = youtubeThumbnail(data.url)
        console.log(thumbnail)
        const isYt = YT_REG.test(data.url)
        if(!isYt){
            return NextResponse.json({
                message: "Invalid URL"
            },
            {
                status: 400
            })
        }
        const extractedId = data.url.split("?")[1];
        const stream = await prismaClient.stream.create({
        data:{
            userId: data.creatorId,
            url: data.url,
            extractedId: extractedId,
            type: "Youtube"
        }
        })
        return NextResponse.json({
            message: "Stream added",
            id: stream.id,
            thumbnail: thumbnail

        })
    }catch(e){
        return NextResponse.json({
            message: "Error while adding a stream"
            // we have to add something so that a single user cannot flood the stream
        },
        {
            status:411
        })
    }
}
export async function GET(req: NextRequest){
    const creatorId = req.nextUrl.searchParams.get("creatorId")
    const streams = await prismaClient.stream.findMany({
        where:{
            userId: creatorId??"",
        }
    })
    return NextResponse.json(streams)
}