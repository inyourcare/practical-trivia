import fs from "fs";
import Link from "next/link";
import wawaToKr from "./wawaToKr";

export function getWawaFiles() {
  const wawafolder = "app/intro/wawa";
  const files = fs.readdirSync(wawafolder);
  return files;
}
export default function WawaLinkList() {
  const files = getWawaFiles();

  return (
    <div className="grid grid-cols-4 gap-4">
      {files.map((file) => (
        <div key={file}>
          <Link href={`${process.env.HOST_BASE_URL}/intro/wawa/${file}`}>
            {`${wawaToKr[file]}점`}
          </Link>
        </div>
      ))}
    </div>
  );
}
