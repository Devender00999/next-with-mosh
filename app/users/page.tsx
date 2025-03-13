import React, { Suspense } from "react";
import UserTable from "./UserTable";

const UserPages = async ({ searchParams }: any) => {
   const { sortOrder } = await searchParams;
   console.log({ sortOrder });
   return (
      <div>
         {/* <Suspense fallback={<span>Loading...</span>}> */}
         <UserTable sortOrder={sortOrder as string} />
         {/* </Suspense> */}
      </div>
   );
};

export default UserPages;
