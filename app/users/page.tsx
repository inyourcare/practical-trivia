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
        // page: 0,
        // limit: 1000,
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
      const { users, pages } = await result.json();
      console.log(users, pages);
      setState({ ...state, users: users });
    });
  return (
    <>
      <div>
        {/* {state.users?.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))} */}
        <button onClick={getUserList}>refresh</button>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  이름
                </th>
                <th scope="col" className="px-6 py-3">
                  문의종류
                </th>
                <th scope="col" className="px-6 py-3">
                  전화번호
                </th>
                <th scope="col" className="px-6 py-3">
                  주소
                </th>
                <th scope="col" className="px-6 py-3">
                  상세주소
                </th>
                <th scope="col" className="px-6 py-3">
                  설명
                </th>
                <th scope="col" className="px-6 py-3">
                  문의날자
                </th>
              </tr>
            </thead>
            <tbody>
              {state.users?.map((user) => (
                // <div key={user.id}>{user.name}</div>
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.name}
                  </th>
                  <td className="px-6 py-4">{user.kind}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">{user.address}</td>
                  <td className="px-6 py-4">{user.address2}</td>
                  <td className="px-6 py-4">{user.description}</td>
                  <td className="px-6 py-4">{user.createdAt.toString()}</td>
                  {/* <td className="px-6 py-4">{user.createdAt.getDate()}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
