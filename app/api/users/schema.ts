import { z } from "zod";

const User = z.object({
   name: z.string().min(4),
   email: z.string().email(),
   password: z.string().min(5),
});

export default User;
