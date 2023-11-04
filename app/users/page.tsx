import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: String };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1 className="pb-5">UsersPage</h1>
      <Link href="/users/new" className="btn">
        Add New User
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
