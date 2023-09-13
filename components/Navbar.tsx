"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LogoutIcon from "../public/assets/logout.svg";
import HomeIcon from "../public/assets/home.svg";
import SkeletonNavbar from "./skeletons/SkeletonNavbar";

type Props = {};

const Navbar = (props: Props) => {
  const { data: session, status } = useSession();
  const [dropdown, setDropdown] = useState<boolean>(false);

  const router = useRouter();

  const user = session?.user?.name?.split(" ")[0];

  return (
    <>
      {!session && <SkeletonNavbar />}
      
      {status === "authenticated" && (
        <div className="px-8 max-w-3xl mx-auto">
          <div className="flex mt-10 justify-between">
            <div>
              <h1
                onClick={() => router.push("/notes")}
                className="font-semibold text-2xl text-[#fff] leading-9 cursor-pointer"
              >
                Notelio
              </h1>
            </div>

            <div className="flex gap-4 items-center">
              <Link
                href="/notes/create"
                className="flex underline underline-offset-4 text-[#a4a2a2] text-center hover:text-white transition-all"
              >
                New Note
              </Link>

              <div className="relative">
                {/* DESKTOP DEVICES DROPDOWN BTN */}
                <button
                  className="hidden sm:flex items-center w-full gap-3 bg-[#1f1f1f] rounded-md text-[#a4a2a2] px-4 py-2 hover:text-white transition-all"
                  onClick={() => setDropdown((prev) => !prev)}
                >
                  {user}
                  <img
                    src={session?.user?.image as string}
                    alt={"userImage"}
                    className="w-6 h-6 rounded-full"
                  />
                </button>

                {/* MOBILE DEVICES DROPDOWN BTN */}
                <img
                  src={session?.user?.image as string}
                  alt={"userImage"}
                  className="flex sm:hidden w-9 h-9 border-2 border-gray-500 rounded-full"
                  onClick={() => setDropdown((prev) => !prev)}
                />

                {/* Dropdown Menu */}
                <div
                  className={`${
                    dropdown ? "block" : "hidden"
                  } absolute z-10 bg-[#1f1f1f] text-[#a4a2a2] text-sm rounded-md w-64 mt-2 right-0 origin-top transform border border-gray-600`}
                >
                  <ul>
                    <li className="flex items-center text-center text-white gap-3 transition-all px-4 py-2 border-b border-gray-600 overflow-hidden">
                      <img
                        src={session?.user?.image as string}
                        alt={"userImage"}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex flex-col text-left">
                        <p className="text-base">{session.user?.name}</p>
                        <p className="text-xs text-gray-400">
                          {session.user?.email}
                        </p>
                      </div>
                    </li>
                    <li>
                      <Link
                        href="/notes"
                        className="group flex text-center justify-center gap-3 hover:text-white transition-all px-4 py-2 border-b border-gray-600"
                      >
                        <Image
                          src={HomeIcon}
                          alt="home"
                          width={17}
                          height={17}
                          className="opacity-50 group-hover:opacity-100 transition-all"
                        />
                        Home
                      </Link>
                    </li>
                    <li>
                      <div
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="group flex text-center gap-3 justify-center hover:text-white transition-all px-4 py-2 cursor-pointer"
                      >
                        <Image
                          src={LogoutIcon}
                          alt="logout"
                          width={17}
                          height={17}
                          className="opacity-50 group-hover:opacity-100 transition-all"
                        />
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
      )}
    </>
  );
};

export default Navbar;
