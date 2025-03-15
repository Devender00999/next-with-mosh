import { NextRequest, NextResponse } from "next/server";
import users from "../data.json";
import User from "./schema";

export function GET(request: NextRequest) {
   return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
   const userDetails = await request.json();
   const validate = User.safeParse(userDetails);
   if (!validate.success)
      return NextResponse.json(validate.error, { status: 400 });
   users.push({ id: users.length + 1, ...userDetails });
   return NextResponse.json(
      { message: "User added successfully." },
      { status: 201 }
   );
}
