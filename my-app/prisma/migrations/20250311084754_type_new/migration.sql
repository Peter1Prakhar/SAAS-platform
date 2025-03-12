/*
  Warnings:

  - Made the column `type` on table `Stream` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Stream" ALTER COLUMN "type" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "type" DROP NOT NULL;
