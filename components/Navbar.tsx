"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

type Props = {};

const Navbar = (props: Props) => {
  const { data: session } = useSession();
  const [dropdown, setDropdown] = useState<boolean>(false);
  
  const user = session?.user?.name?.split(" ")[0];
  // console.log(user);
  

  return (
    <div className="px-8 max-w-3xl mx-auto">
      <div className="flex mt-10 justify-between">
        <div>
          <h1 className="font-semibold text-2xl text-[#fff] leading-9">
            Notelio
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href=""
            className="underline underline-offset-4 text-[#a4a2a2] hover:text-white transition-all"
          >
            New Note
          </Link>

          <div className="relative">
            <button
              className="flex items-center w-28 justify-between bg-[#1f1f1f] rounded-md text-[#a4a2a2] px-4 py-2 hover:text-white transition-all"
              onClick={() => setDropdown((prev) => !prev)}
            >
              {user}
              <img
                src={session?.user?.image as string}
                alt={"userImage"}
                className="w-6 h-6 rounded-full"
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`${
                dropdown ? "block" : "hidden"
              } absolute z-10 bg-[#1f1f1f] text-[#a4a2a2] text-sm rounded-md w-28 mt-2 origin-top transform border border-gray-600`}
            >
              <ul aria-labelledby="dropdownDefaultButton">
                <li>
                  <a
                    href="/notes"
                    className="block text-center hover:text-white transition-all px-4 py-2 border-b border-gray-600"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <div
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="block text-center hover:text-white transition-all px-4 py-2 cursor-pointer"
                  >
                    Sign out
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="border h-px border-[#414040] mt-5" />
    </div>
  );
};

export default Navbar;
