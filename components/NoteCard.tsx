import { Timestamp } from 'firebase/firestore';
import React from 'react'
import parse from 'html-react-parser';

type Props = {
  title: string;
  content: string;
  time: Timestamp;
}

const NoteCard = ({ title, content, time }: Props) => {
  const timestamp = new Date(time.toDate());

  return (
    <div className='flex flex-col bg-[#181818] border-[#303030] border-[1px] rounded-lg p-6 max-w-xs w-full h-52'>
      <h1 className='font-normal text-[#ffffff] text-xl'>
        {title}
      </h1>
      <p className='font-normal text-sm text-[#6f6f6f] mt-2'>
        Created • {timestamp.toLocaleString('default', { month: 'long' })} {timestamp.getDate()}, {timestamp.getFullYear()}
      </p>
      <hr className='border h-px border-[#2e2e2e] mt-2' />
      <p className='font-medium text-base leading-5 text-[#a1a1a1] mt-3 overflow-hidden'>
        {parse(content)}
      </p>
    </div>
  )
}

export default NoteCard;