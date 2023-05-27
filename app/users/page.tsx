"use client";
import { PrismaClient, User } from "@prisma/client";
import { InferGetStaticPropsType } from "next";
import { useEffect, useState } from "react";

export default function UsersHome() {
  const [state, setState] = useState({
    users: [] as User[],
  });
  const getUserList = async () =>
    await fetch(`/api/user/list`, {
      method: "POST",
      body: JSON.stringify({
        page: 0,
        limit: 1000,
        // conditions: {
        // creator: {
        // email: 'admin@sotong.co.kr'
        // email
        //     ...(email && { email: email })
        // }
        // }
        // conditions
        conditions: {},
      }),
      headers: { "Content-Type": "application/json" },
    }).then(async (result) => {
      const {users,pages} = await result.json()
      console.log(users,pages);
      setState({...state,users:users})
    });
  return (
    <>
      <div>
        {state.users?.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
        <button onClick={getUserList}>refresh</button>
      </div>
    </>
  );
}