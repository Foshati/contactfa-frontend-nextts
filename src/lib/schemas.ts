import { z } from "zod";




export const formSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    Message: z.string().min(6).max(150),
  });
  