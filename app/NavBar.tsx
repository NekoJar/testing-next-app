import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className=" bg-slate-200 flex p-5 justify-end items-center">
      <Link href="/" className="mr-5 ">
        Home
      </Link>
      <Link href="/products" className="mr-5">
        Products
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
    </div>
  );
};

export default NavBar;
