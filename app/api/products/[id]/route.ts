import { NextRequest, NextResponse } from "next/server";
import Product from "../schema";
interface Props {
   params: { id: number };
}
const products = [{ id: 1, name: "Soap", price: 130 }];
export async function GET(req: NextRequest, { params }: Props) {
   const { id } = await params;
   console.log({ products });
   const product = products.find((product) => product.id == id);
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
   const productIdx = products.findIndex((product) => product.id == id);

   if (productIdx < 0) {
      return NextResponse.json(
         { message: "product not found" },
         { status: 404 }
      );
   }
   updatedDetails.id = products[productIdx].id;
   products.splice(productIdx, 1, updatedDetails);
   return NextResponse.json({ message: "product updated successfully" });
}

export async function DELETE(req: NextRequest, { params: { id } }: Props) {
   const productIdx = products.findIndex((product) => product.id == id);
   if (productIdx < 0)
      return NextResponse.json(
         { message: "product not found" },
         { status: 404 }
      );
   products.splice(productIdx, 1);
   return NextResponse.json({ message: "product deleted successfully" });
}
