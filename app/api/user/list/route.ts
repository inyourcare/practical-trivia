import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, User } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  console.log("user list api - request body::",body);
  const { page, limit, lastId, conditions } = body;
  console.log("user list api - page,limit,conditions", page, limit, conditions);

  const whereConditions = {
    // deleted: false,
    // invisable: false,
    ...conditions,
    // ...conditionTemp
  };
  const users = await prisma.user.findMany({
    // skip: page * limit,
    // skip: lastId ? 1 : page * limit,

    ...(page && limit && { skip: page * limit }),
    ...(limit && { take: limit }),
    ...(lastId && { skip: 1, cursor: { id: lastId } }),
    select: {
      id: true,
      name: true,
      kind: true,
      phone: true,
      // password:true,
      address: true,
      address2: true,
      description: true,
      // role: true,
      createdAt: true,
      updatedAt: true,
    },
    where: whereConditions,
    // where: {
    //     creator: {
    //         email: 'admin@sotong.co.kr'
    //     }
    // },
    // orderBy: [{
    //     groupId: 'desc',
    // }, {
    //     step: 'asc'
    // }],
    // include: {
    //     creator: {
    //         select: {
    //             name: true, email: true, image: true, role: true
    //         }
    //     },
    //     modifier: {
    //         select: {
    //             name: true, email: true, image: true, role: true
    //         }
    //     }
    // }
  });
  console.debug("users list api result", users.length);
  const total = await prisma.user.count({
    where: whereConditions,
    // where: {
    //     creator: {
    //         email: 'admin@sotong.co.kr'
    //     }
    // }
  });
  const pages =
    total === 0 ? 1 : Math.floor(total / limit) + (total % limit === 0 ? 0 : 1);
  // res.status(200).json({ users, pages });

  // console.log(user);
  await prisma.$disconnect();
  return NextResponse.json({ users, pages });
}
