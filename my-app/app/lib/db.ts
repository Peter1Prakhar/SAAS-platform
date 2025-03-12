// create schema, migrate your db, create your client -> before doing the db stuff
import { PrismaClient } from "@prisma/client";
export const prismaClient = new PrismaClient();