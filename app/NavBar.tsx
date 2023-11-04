import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className=" bg-slate-200 flex p-5 justify-between items-center ">
      <div className="ml-3">
        <Link href="/" className=" font-bold uppercase text-lg">
          Next App
        </Link>
      </div>
      <div className="space-x-5 mr-3">
        <Link href="/products">Products</Link>
        <Link href="/users">Users</Link>
        <Link href="/api/auth/signin">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
