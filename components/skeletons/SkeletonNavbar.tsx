import React from 'react'
import PageWrapper from '../PageWrapper'
import Shimmer from './Shimmer';

type Props = {}

const SkeletonNavbar = (props: Props) => {
  return (
    <PageWrapper>
      <div className="relative flex flex-col bg-[#1d1d1d] rounded w-full mx-auto h-16 mt-4 px-4 overflow-hidden">
        <div className="h-8 w-full bg-[#232323] rounded my-auto"></div>
        <Shimmer />
      </div>
      <hr className="border h-px border-[#414040] mt-5" />
    </PageWrapper>
  );
}

export default SkeletonNavbar