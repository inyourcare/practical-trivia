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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Drawer>
    </div>
  );
}
