import { NextRequest, NextResponse } from "next/server";
import Product from "./schema";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
   const products = await prisma.product.findMany();
   return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
   const productDetails = await request.json();
   const validate = Product.safeParse(productDetails);

   if (!validate.success)
      return NextResponse.json(validate.error, { status: 400 });

   const product = await prisma.product.create({ data: productDetails });
   return NextResponse.json(product, { status: 201 });
}
