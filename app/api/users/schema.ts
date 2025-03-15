import { z } from "zod";

const User = z.object({
   name: z.string(),
   email: z.string().email(),
});

export default User;
