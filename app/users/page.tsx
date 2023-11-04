import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: String };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1 className="pb-5">UsersPage</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
