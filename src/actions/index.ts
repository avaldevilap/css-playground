import { defineAction, z } from "astro:actions";

export const server = {
  signup: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
      confirmPassword: z.string(),
    }),
    handler(input) {
      console.log(input);
      return { success: true };
    },
  }),
};
