import React from 'react'

type Props = {}

const NoteCard = (props: Props) => {

  return (
    <div className='flex flex-col bg-[#181818] border-[#303030] border-[1px] rounded-lg p-6 max-w-xs w-full'>
      <h1 className='font-normal text-[#ffffff] text-2xl'>
        NOTE TITLE
      </h1>
      <p className='font-normal text-sm leading-3 text-[#6f6f6f] mt-2'>
        Created • Month Date, Year
      </p>
      <hr className='border h-px border-[#2e2e2e] mt-2' />
      <p className='font-medium text-base leading-5 text-[#a1a1a1] mt-3'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt fineits wasnot me but yesits.
      </p>
    </div>
  )
}

export default NoteCard;