import Link from "next/link";
import React from "react";

interface User {
   id: number;
   name: string;
   email: string;
}

const UserTable = async ({ sortOrder }: { sortOrder: "name" | "email" }) => {
   const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
   });
   console.log(sortOrder);
   const users: User[] = await res.json();

   return (
      <div>
         <h1>Users</h1>
         <table className="table table-bordered">
            <thead>
               <tr>
                  <th>ID</th>
                  <th>
                     <Link href="/users?sortOrder=name">Name</Link>
                  </th>
                  <th>
                     <Link href="/users?sortOrder=email">Email</Link>
                  </th>
               </tr>
            </thead>
            <tbody>
               {users
                  .sort((a: User, b: User) =>
                     a?.[sortOrder]?.localeCompare(b?.[sortOrder])
                  )
                  ?.map((user) => (
                     <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                     </tr>
                  ))}
            </tbody>
         </table>
      </div>
   );
};

export default UserTable;
