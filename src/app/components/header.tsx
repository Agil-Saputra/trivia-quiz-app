import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import BrainLogo from "@/app/assets/brain.svg"

const Header = () => {
  const { userId } = auth();
  console.log(userId);
  return (
    <nav className="w-full flex items-center justify-between bg-blue-500 text-white py-4 px-6 mb-5">
      <Link href={"/"}>
        <div className="text-lg flex gap-2 items-center uppercase font-bold text-white">
			<Image src={BrainLogo} alt="brain logo" className="w-10 h-10 "/>
			Trivia Quiz App
		</div>
      </Link>
      {!userId && (
        <div className="flex flex-wrap items center gap-6">
          <Link href={"sign-in"}>
            <div className="text-md hover:text-white uppercase font-bold text-gray-300">
              Sign In
            </div>
          </Link>
          <Link href={"sign-up"}>
            <div className="text-md hover:text-white uppercase font-bold text-gray-300">
              Sign Up
            </div>
          </Link>
        </div>
      )}
	{userId && <UserButton/>}
    </nav>
  );
};

export default Header;
