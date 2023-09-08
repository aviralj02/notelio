import { Timestamp } from 'firebase/firestore';
import React from 'react'
import parse from 'html-react-parser';
import Link from 'next/link';

type Props = {
  _id: string;
  title: string;
  content: string;
  time: Timestamp;
}

const NoteCard = ({ _id, title, content, time }: Props) => {
  const timestamp = new Date(time.toDate());

  return (
    <Link
      href={`/notes/${_id}`}
      className="group flex flex-col bg-[#181818] border-[#303030] border-[1px] rounded-lg p-6 max-w-xs w-full h-52 hover:border-[#6e6e6e] transition-all"
    >
      <h1 className="font-normal text-[#ffffff] text-xl">{title}</h1>
      <p className="font-normal text-sm text-[#6f6f6f] mt-2">
        Last Updated • {timestamp.toLocaleString("default", { month: "long" })}{" "}
        {timestamp.getDate()}, {timestamp.getFullYear()}
      </p>

      <hr className="border h-px border-[#2e2e2e] mt-2 group-hover:border-[#6e6e6e] transition-all" />

      <div className="font-medium text-base leading-5 text-[#a1a1a1] mt-3 overflow-hidden">
        {parse(content)}
      </div>
    </Link>
  );
}

export default NoteCard;