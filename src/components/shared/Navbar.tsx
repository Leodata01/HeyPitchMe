"use client";

import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/agent">Agent</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/test">Test</Link>
      </div>
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
