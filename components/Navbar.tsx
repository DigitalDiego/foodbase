import React, { useState } from "react";
import { AiOutlineUser, AiOutlinePlus, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { useUser, SignInButton, useClerk } from "@clerk/nextjs";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  const handleNavbar = () => {
    setNavbar(!navbar);
  };
  const cn = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };
  return (
    <div className="w-full h-[10vh] flex justify-between items-center px-[5vw] relative">
      <Link className="text-3xl font-poppinsSemiBold" href="/">
        FoodBase
      </Link>
      <nav className="hidden lg:flex items-center gap-7">
        <Link href="/">Home</Link>
        <Link href="/recipes">Recipes</Link>
        {isSignedIn && (
          <Link
            className="flex items-center gap-2 px-4 h-8 border border-gray-400 rounded-full hover:bg-gray-200"
            href="/create-a-recipe"
          >
            <span>Create</span>
            <AiOutlinePlus />
          </Link>
        )}
        {!isSignedIn ? (
          <SignInButton>
            <button className="w-10 h-10 rounded-full grid place-items-center bg-gray-200">
              <AiOutlineUser />
            </button>
          </SignInButton>
        ) : (
          <>
            <button
              className="flex items-center gap-2 px-4 h-8 border border-gray-400 rounded-full hover:bg-gray-200"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
            <Link href={"/profile"}>
              <Image
                src={user?.profileImageUrl}
                alt={user?.firstName || ""}
                width={500}
                height={500}
                className="w-10 h-10 rounded-full object-cover"
              />
            </Link>
          </>
        )}
      </nav>
      <button className="text-xl lg:hidden" onClick={handleNavbar}>
        <AiOutlineMenu />
      </button>
      <div
        className={cn(
          "fixed top-0 right-0 bg-[#212121] text-[#f0f0f0] flex flex-col gap-2 w-full h-screen duration-[.8s] px-[5vw] lg:hidden",
          navbar ? "translate-x-0" : "translate-x-[100%]"
        )}
      >
        <div className="w-full h-[10vh] flex justify-end items-center">
          <button className="text-xl" onClick={handleNavbar}>
            <AiOutlinePlus className="rotate-45" />
          </button>
        </div>
        <Link
          className="w-full py-5 text-xl border-b border-[#f0f0f0]"
          href="/"
          onClick={handleNavbar}
        >
          Home
        </Link>
        <Link
          className="w-full py-5 text-xl border-b border-[#f0f0f0]"
          href="/recipes"
          onClick={handleNavbar}
        >
          Recipes
        </Link>
        {isSignedIn && (
          <Link
            className="w-full py-5 text-xl border-b border-[#f0f0f0]"
            href="/create-a-recipe"
            onClick={handleNavbar}
          >
            Create
          </Link>
        )}
        {isSignedIn ? (
          <button
            className="w-full py-5 outline-none text-left text-xl border-b border-[#f0f0f0]"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        ) : (
          <SignInButton>
            <button className="w-full py-5 outline-none text-left text-xl border-b border-[#f0f0f0]">
              Sign In
            </button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}
