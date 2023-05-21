"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Drawer from "@/components/drawer";
import Card from "@/components/drawer-card";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      {/* <div> */}
      <button
        className={`absolute top-0 left-0 bg-gray-300 text-white rounded px-4 py-1 bg-opacity-25 hover:bg-opacity-100`}
        style={{
          backgroundImage: `url('/images/icons/list.svg')`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
          width: `40px`,
          height: `40px`,
        }}
        onClick={() => setIsOpen(true)}
      ></button>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Card
          icon={
            // Tailwind center -> flex flex-wrap justify-center items-center
            <button className={`h-12 w-12 flex flex-wrap justify-center items-center bg-green-600 text-white rounded px-4 py-1`}>
              Dream
            </button>
          }
          title={<p>상상코칭</p>}
          descrision={<p className="text-sm text-gray-900 dark:text-white">아이의 미래를 위한 선택 상상코칭입니다.</p>}
          subDescrision={<p className="text-xs text-gray-900 dark:text-white">학생 맞춤의 프리미엄 과외</p>}
        />
      </Drawer>
    </div>
  );
}
