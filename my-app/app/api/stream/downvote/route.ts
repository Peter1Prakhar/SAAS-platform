import { prismaClient } from "@/app/lib/db";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const upvoteSchema = z.object({
    streamId: z.string()
})
export async function POST(req: NextRequest){
    const session = await getSession()

    const user = await prismaClient.user.findFirst({
        where:{
            email: session?.user?.email ?? "",
        }
    })
    if(!user){
        return NextResponse.json({
            message: "Unauthenticated"
        },
        {
            status: 404
        })
    }
    try{
        const data = upvoteSchema.parse(await req.json())
        await prismaClient.upvote.delete({
            where:{
                userId_streamId:{
                    streamId: data.streamId,
                    userId: user.id
                }
            }
        })
    }
    catch(e){
        return NextResponse.json({
            message: "Error while upvoting"
        },
        {
            status: 403
        })
    }
}