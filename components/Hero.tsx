"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-screen px-4">
      <div className="flex flex-col gap-5">
        <h1
          className="text-7xl text-center sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400 select-none"
        >
          Notelio
        </h1>
        <p
          className="text-xl text-[#C8C8C8] sm:max-w-md text-center sm:text-center max-w-full"
        >
          A comprehensive note taking application. <br />
          Made with{" "}
          <span className="text-red-500">❤</span> by{" "}
          <span className="text-[#EAEAEA] font-semibold">Aviral</span>
        </p>
      </div>
      <div
        className="cursor-pointer text-[#EAEAEA] transition-all flex gap-3 items-center hover:gap-4 w-fit sm:justify-center select-none"
      >
        <div
          onClick={() => signIn()}
          className="underline underline-offset-4 text-xl transition hover:text-[#eaeaeab0]"
        >
          Start Taking Notes
        </div>
        <span className="text-2xl">→</span>
      </div>
    </div>
  );
};

export default Hero;