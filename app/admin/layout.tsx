import React, { ReactNode } from "react";

interface Props {
   children: ReactNode;
}
const AdminLayout = ({ children }: Props) => {
   return (
      <div className="flex h-screen w-screen">
         <div className="w-[10rem]">
            <ul>
               <li>Item 1</li>
               <li>Item 2</li>
            </ul>
         </div>
         <div className="flex flex-1">{children}</div>
      </div>
   );
};

export default AdminLayout;
