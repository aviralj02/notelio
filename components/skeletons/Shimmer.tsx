import React from "react";

type Props = {};

const Shimmer = (props: Props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full animate-loading">
      <div className="w-[50%] h-full bg-[#333333] opacity-40 tranform -skew-x-12"></div>
    </div>
  );
};

export default Shimmer;
