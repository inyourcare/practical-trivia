"use client";

import Image from "next/image";
import { useState } from "react";

export default function AwsTest() {
  const [url, setUrl] = useState('');
  const getIamge = async () => {
    await fetch(`/api/aws/s3/get`, {
      method: "POST",
      body: JSON.stringify({}),
      headers: { "Content-Type": "application/json" },
    }).then(async (result) => {
      const data = await result.json();
      console.log(data.url);
      setUrl(data.url)
    });
  };
  return (
    <>
      <button onClick={getIamge}>test</button>
    </>
  );
}
