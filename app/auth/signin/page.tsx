"use client";

import React, { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import GoogleIcon from "@/public/assets/google-icon.png";
import { signIn } from "next-auth/react";

type Props = {};

const SignIn = (props: Props) => {
  const [checkbox, setCheckbox] = useState<boolean>(false);

  const handleAuth = () => {
    if (checkbox) {
      signIn("google", {
        callbackUrl: "/notes",
      });
    } else {
      alert("Please agree to the terms & condition");
    }
  };

  return (
    <PageWrapper>
      <div className="flex flex-col">
        <div className="flex justify-center mt-5">
          <h1 className="font-semibold text-3xl text-[#fff] leading-9">
            Notelio
          </h1>
        </div>

        <hr className="border h-px border-[#414040] mt-5" />

        <div className="flex flex-col items-center mt-10 gap-8">
          <div className="max-w-xl flex flex-col gap-10">
            <h2 className="text-3xl text-white">
              By{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400 animate-pulse">
                Signing-In
              </span>
              , <br />
              you agree to the following terms!
            </h2>

            <ul className="text-white list-disc space-y-8">
              <li>
                Your credential data and post information will be recorded for
                moderation and safety purposes. We have legal rights to take
                certain actions if you violate this condition.
              </li>
              <li>
                Any kind of misuse and actions conducted against these terms can
                lead to permanent ban from using this platform.
              </li>
              <li>
                You agree to not use any web scrapping tools which may be used
                to mine Notelio services and features.
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
              checked={checkbox}
              onChange={() => setCheckbox((prev) => !prev)}
              required
            />
            <label className="text-white ml-4">
              By checking, you agree to these terms & condition
            </label>
          </div>

          <div
            onClick={() => signIn("google")}
            className="group flex items-center outline-none gap-5 border border-white opacity-50 hover:opacity-100 rounded-md p-3 transition-all cursor-pointer"
          >
            <Image src={GoogleIcon} alt="google-icon" width={40} height={40} />
            <p className="text-white text-xl">Sign in with Google</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default SignIn;
