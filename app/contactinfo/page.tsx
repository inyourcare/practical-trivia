"use client"
import { PrismaClient, ContactInfo } from "@prisma/client";
import { InferGetStaticPropsType } from "next";
import { useEffect, useState } from "react";

export default function contactinfoHome() {
  const [state, setState] = useState({
    contactinfos: [] as ContactInfo[],
    curPage: 0,
    totalPage: 0,
  });
  const getContactInfoList = async () =>
    await fetch(`/api/contactinfo/list`, {
      method: "POST",
      body: JSON.stringify({
        page: state.curPage,
        limit: 20,
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
      const { contactinfos, pages } = await result.json();
      console.log(contactinfos, pages);
      setState({ ...state, contactinfos: contactinfos, totalPage: pages });
    });

  useEffect(() => {
    getContactInfoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.curPage]);
  return (
    <>
      <div>
        {/* {state.contactInfos?.map((contactInfo) => (
          <div key={contactInfo.id}>{contactInfo.name}</div>
        ))} */}
        <button onClick={getContactInfoList}>refresh</button>

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
              {state.contactinfos?.map((contactinfo) => (
                // <div key={contactInfo.id}>{contactInfo.name}</div>
                <tr
                  key={contactinfo.id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {contactinfo.name}
                  </th>
                  <td className="px-6 py-4">{contactinfo.kind}</td>
                  <td className="px-6 py-4">{contactinfo.phone}</td>
                  <td className="px-6 py-4">{contactinfo.address}</td>
                  <td className="px-6 py-4">{contactinfo.address2}</td>
                  <td className="px-6 py-4">{contactinfo.description}</td>
                  <td className="px-6 py-4">{contactinfo.createdAt.toString()}</td>
                  {/* <td className="px-6 py-4">{contactInfo.createdAt.getDate()}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full flex justify-center">
            <span>
              <input
                className="text-right border border-indigo-600"
                type="number"
                onChange={(e) =>
                  setState({ ...state, curPage: Number(e.target.value) })
                }
                value={state.curPage}
              />
              /
            </span>
            <span className="text-right border border-indigo-600">
              {state.totalPage - 1}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
