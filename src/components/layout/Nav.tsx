"use client";
import { useState } from "react";
import Link from "next/link";
function Nav() {
  return (
    <div className="flex justify-between p-8">
      <div>Logo Here</div>
      <nav className="flex justify-between items-center">
        <Link href={"/"}>Home</Link>
        <div className="w-16 h-16 flex items-center">
          <div className={`w-8 h-[2px]`}></div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
