import Link from "next/link";
import { ReactNode } from "react";

export default function Card({
  icon,
  title,
  descrision,
  subDescrision,
  targetLink = '#',
}: {
  icon?: ReactNode;
  title?: ReactNode;
  descrision?: ReactNode;
  subDescrision?: ReactNode;
  targetLink?: string;
}) {
  return (
    <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      {/* <div className="animate-pulse flex space-x-4"> */}
      <div className="flex space-x-4">
        <div className="rounded-full bg-gray-400 h-12 w-12 overflow-auto">
          {icon}
        </div>
        <div className="flex-1 space-y-4 py-1">
          {/* <div className="h-4 bg-gray-400 rounded w-3/4">{title}</div> */}
          <div className="h-4 w-3/4"><Link href={targetLink}>{title}</Link></div>
          <div className="space-y-2">
            {/* <div className="h-4 bg-gray-400 rounded">{script1}</div> */}
            <div className="h-4 rounded">{descrision}</div>
            {/* <div className="h-4 bg-gray-400 rounded w-5/6">{script2}</div> */}
            <div className="h-4 rounded w-5/6">{subDescrision}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
