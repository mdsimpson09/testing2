/*
  Warnings:

  - You are about to drop the column `disliked_at` on the `DislikedProfile` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Player` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DislikedProfile" DROP COLUMN "disliked_at";

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "createdAt";
