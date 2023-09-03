import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

type Props = {};

const NoAccess = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-[600px]">
      <h1 className="text-white text-center text-4xl font-medium">
        Sign In to use{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400 animate-pulse">
          Notelio
        </span>
      </h1>

      <div onClick={() => signIn()} className="bg-[#1f1f1f] text-[#a4a2a2] text-xl rounded-md px-3 py-1 hover:text-white cursor-pointer">
        Sign In
      </div>
    </div>
  );
};

export default NoAccess;
