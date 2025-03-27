import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import User from "../schema";
interface Props {
   params: Promise<{ id: string }>;
}
export async function GET(req: NextRequest, { params }: Props) {
   const { id } = await params;
   const user = await prisma.user.findUnique({ where: { id: Number(id) } });
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

   const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
   if (!user)
      return NextResponse.json({ message: "User not found" }, { status: 404 });

   await prisma.user.update({
      where: { id: Number(id) },
      data: updatedDetails,
   });
   return NextResponse.json({ message: "User updated successfully" });
}

export async function DELETE(req: NextRequest, { params }: Props) {
   const { id } = await params;

   const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
   if (!user)
      return NextResponse.json({ message: "User not found" }, { status: 404 });
   await prisma.user.delete({ where: { id: parseInt(id) } });

   return NextResponse.json({ message: "User deleted successfully" });
}
