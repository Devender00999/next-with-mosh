import React from "react";

const ProductsDetails = async ({ params, searchParams }: any) => {
   const { slug } = await params;
   const { sortOrder } = await searchParams;

   return (
      <div>
         ProductsDetails {slug} {sortOrder}
      </div>
   );
};

export default ProductsDetails;
