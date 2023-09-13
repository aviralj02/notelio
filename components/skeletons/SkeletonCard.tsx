import React from "react";
import Shimmer from "./Shimmer";

type Props = {};

const SkeletonComponent = (props: Props) => {
  return (
    <div className="relative flex flex-col justify-between bg-[#1d1d1d] rounded-lg p-6 max-w-xs w-full h-52 overflow-hidden">
      <div className="h-8 w-full bg-[#232323] rounded"></div>
      <div className="h-4 w-full bg-[#232323] rounded"></div>
      
      <hr className="border border-[#232323]" />

      <div className="h-16 w-full bg-[#232323] rounded"></div>
      <Shimmer />
    </div>
  );
};

export default SkeletonComponent;