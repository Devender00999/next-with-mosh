import { NextRequest, NextResponse } from "next/server";
import User from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
   const users = await prisma.user.findMany();
   return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
   const userDetails = await request.json();
   const validate = User.safeParse(userDetails);
   if (!validate.success)
      return NextResponse.json(validate.error, { status: 400 });
   const res = await prisma.user.create({ data: userDetails });
   return NextResponse.json(res, { status: 201 });
}
