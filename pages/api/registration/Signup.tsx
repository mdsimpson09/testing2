import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ["query"] });
  try {
    const { player: playerData } = req.body;
    const player = await prisma.player.create({
      data: {
        first_name: playerData.first_name,
        last_name: playerData.last_name,
        username: playerData.username,
        email:  playerData.email,
        password: playerData.password,
        Date_of_birth: playerData.Date_of_birth,
        preferred_pronouns: playerData.preferred_pronouns,
        zip_code: playerData.zip_code,
        photo: playerData.photo
      
      }
    });
    res.status(201).json({message: "User created successfully!"});
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  } finally {
    await prisma.$disconnect();
  }
};