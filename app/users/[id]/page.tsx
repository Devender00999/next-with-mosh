import React from "react";

interface Props {
   params: { id: number };
}
const UserDetailsPage = async ({ params }: Props) => {
   const { id } = await params;
   return <div>UserDetailsPage {id}</div>;
};

export default UserDetailsPage;
