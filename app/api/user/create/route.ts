import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, User } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const user = await prisma.user
    .create({
      data: {
        // ...req.body,
        ...body,
      },
    })
  console.log(user);
  await prisma.$disconnect();
  return NextResponse.json({ result: user });
}