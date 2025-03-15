import { NextRequest, NextResponse } from "next/server";
import Product from "./schema";

const products = [{ id: 1, name: "Soap", price: 230 }];
export function GET(request: NextRequest) {
   return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
   const productDetails = await request.json();
   const validate = Product.safeParse(productDetails);
   if (!validate.success)
      return NextResponse.json(validate.error, { status: 400 });
   products.push({ id: products.length + 1, ...productDetails });
   return NextResponse.json(
      { message: "product added successfully." },
      { status: 201 }
   );
}
