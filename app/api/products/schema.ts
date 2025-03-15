import { z } from "zod";

const Product = z.object({
   name: z.string(),
   price: z.number(),
});

export default Product;
