import React, { useState } from "react";

const ProductCart = () => {
   const [data, setData] = useState(0);
   return (
      <div>
         {data}
         <button onClick={() => setData((prev) => prev + 1)}>
            Add to cart
         </button>
      </div>
   );
};

export default ProductCart;
