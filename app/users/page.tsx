import React from "react";
import UserTable from "./UserTable";

const UserPages = async ({ searchParams }: any) => {
   const { sortOrder } = await searchParams;
   console.log({ sortOrder });
   return (
      <div>
         <UserTable sortOrder={sortOrder as string} />
      </div>
   );
};

export default UserPages;
