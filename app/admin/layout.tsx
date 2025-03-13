import React, { ReactNode } from "react";

interface Props {
   children: ReactNode;
}
const AdminLayout = ({ children }: Props) => {
   return (
      <div className="flex h-screen w-screen">
         <div className="w-[10rem] bg-gray-500 text-white px-4">
            <ul className="mt-4 flex flex-col gap-3">
               <li>Item 1</li>
               <li>Item 2</li>
            </ul>
         </div>
         <div className="flex flex-1 p-3 px-4">{children}</div>
      </div>
   );
};

export default AdminLayout;
