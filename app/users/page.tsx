import React from "react";

interface User {
   id: number;
   name: string;
   email: string;
}
const UserPages = async () => {
   const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
   });
   const users: User[] = await res.json();
   return (
      <div>
         <h1>Users</h1>
         <div>{new Date().toLocaleString()}</div>
         <ul>
            {users.map((user) => (
               <li key={user.id}>{user.name}</li>
            ))}
         </ul>
      </div>
   );
};

export default UserPages;
