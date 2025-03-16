import { NextRequest, NextResponse } from "next/server";
import Product from "../schema";
import { prisma } from "@/prisma/client";
interface Props {
   params: { id: string };
}
const products = [{ id: 1, name: "Soap", price: 130 }];
export async function GET(req: NextRequest, { params }: Props) {
   const { id } = await params;

   const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
   });

   if (!product)
      return NextResponse.json(
         { message: "Product not found" },
         { status: 404 }
      );
   return NextResponse.json(product);
}

export async function PUT(req: NextRequest, { params }: Props) {
   const { id } = await params;
   const updatedDetails = await req.json();
   const validation = Product.safeParse(updatedDetails);
   if (!validation.success)
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });

   const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
   });
   if (!product) {
      return NextResponse.json(
         { message: "Product not found" },
         { status: 404 }
      );
   }
   await prisma.product.update({
      where: { id: parseInt(id) },
      data: updatedDetails,
   });
   return NextResponse.json({ message: "product updated successfully" });
}

export async function DELETE(req: NextRequest, { params }: Props) {
   const { id } = await params;

   const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
   });
   if (!product) {
      return NextResponse.json(
         { message: "Product not found" },
         { status: 404 }
      );
   }

   await prisma.product.delete({ where: { id: parseInt(id) } });

   return NextResponse.json({ message: "product deleted successfully" });
}
