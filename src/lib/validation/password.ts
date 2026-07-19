import z from "zod";

export const passwordSchema = z.string().min(8).trim().brand<"Password">();
export type Password = z.infer<typeof passwordSchema>;
