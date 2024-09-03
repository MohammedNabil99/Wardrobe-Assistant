"use client";

import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="flex justify-between items-center p-8 text-white h-14 fixed w-full backdrop-blur-md border-b border-gray-700 z-50">
      <Link href="/">
        <h1 className="text-2xl font-bold">SS</h1>
      </Link>
      <div className="flex flex-row gap-4">
        {isSignedIn ? (
          <>
            <Link href="/inventory">
              <button className="border px-2 py-1 rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 text-black font-bold hover:scale-110 duration-200">
                Inventory
              </button>
            </Link>
            <a href="/membership-plans">
              <button className="border px-2 py-1 rounded-lg bg-gradient-to-br from-yellow-200 via-green-200 to-green-300 text-black font-bold hover:scale-110 duration-200">
                View plans
              </button>
            </a>
            <UserButton />
          </>
        ) : (
          <>
            <Link href="/sign-in">
              <button className="border px-2 py-1 rounded-lg bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100 text-black font-bold hover:scale-110 duration-200">
                Sign in
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="border px-2 py-1 rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 text-black font-bold hover:scale-110 duration-200">
                Sign up
              </button>
            </Link>
            <a href="/membership-plans">
              <button className="border px-2 py-1 rounded-lg bg-gradient-to-br from-yellow-200 via-green-200 to-green-300 text-black font-bold hover:scale-110 duration-200">
                View plans
              </button>
            </a>
          </>
        )}
      </div>
    </nav>
  );
}
