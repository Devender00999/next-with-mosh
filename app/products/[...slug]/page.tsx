import React from "react";

const ProductsDetails = async ({
   params,
   searchParams,
}: {
   searchParams: Promise<Record<string, string>>;
   params: Promise<Record<string, string>>;
}) => {
   const { slug } = await params;
   const { sortOrder } = await searchParams;

   return (
      <div>
         ProductsDetails {slug} {sortOrder}
      </div>
   );
};

export default ProductsDetails;
