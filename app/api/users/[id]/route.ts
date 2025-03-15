import { NextRequest, NextResponse } from "next/server";
import users from "../../data.json";
import User from "../schema";
interface Props {
   params: { id: number };
}
export async function GET(req: NextRequest, { params }: Props) {
   const { id } = await params;
   console.log({ users });
   const user = users.find((user) => user.id == id);
   if (!user)
      return NextResponse.json({ message: "User not found" }, { status: 404 });
   return NextResponse.json(user);
}

export async function PUT(req: NextRequest, { params }: Props) {
   const { id } = await params;
   const updatedDetails = await req.json();
   const validation = User.safeParse(updatedDetails);
   if (!validation.success)
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
   const userIdx = users.findIndex((user) => user.id == id);

   if (userIdx < 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
   }
   updatedDetails.id = users[userIdx].id;
   users.splice(userIdx, 1, updatedDetails);
   return NextResponse.json({ message: "User updated successfully" });
}

export async function DELETE(req: NextRequest, { params: { id } }: Props) {
   const userIdx = users.findIndex((user) => user.id == id);
   if (userIdx < 0)
      return NextResponse.json({ message: "User not found" }, { status: 404 });
   users.splice(userIdx, 1);
   return NextResponse.json({ message: "User deleted successfully" });
}
