import z from "zod";

export const emailSchema = z.email().brand<"Email">();
export type Email = z.infer<typeof emailSchema>;
