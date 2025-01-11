import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email({ message: "please provide a valid email." }),
  password: z.string(),
});
