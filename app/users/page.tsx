import UserTable from "./UserTable";

const UserPages = async ({
   searchParams,
}: {
   searchParams: Promise<Record<string, string>>;
}) => {
   const { sortOrder } = await searchParams;
   console.log({ sortOrder });
   return (
      <div>
         {/* <Suspense fallback={<span>Loading...</span>}> */}
         <UserTable sortOrder={sortOrder as "name"} />
         {/* </Suspense> */}
      </div>
   );
};

export default UserPages;
