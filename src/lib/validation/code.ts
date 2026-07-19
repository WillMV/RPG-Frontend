import z from "zod";

export const codeSchema = z.string().length(6).brand<"Code">();
export type Code = z.infer<typeof codeSchema>;
