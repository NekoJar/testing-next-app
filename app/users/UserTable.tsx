import React from "react";

interface User {
  name: string;
  id: number;
  email: string;
}

const UserTable = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <th>
            <tr>Name</tr>
            <tr>Email</tr>
          </th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <tr>{user.name}</tr>
              <tr>{user.email}</tr>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
