import http from "@/api/httpClient";
import type { Email } from "@/lib/validation";

export interface ResetPasswordPayload {
  email: Email;
}

export const resetPasswordService = async (params: ResetPasswordPayload) => {
  const { data } = await http.post(
    `${import.meta.env.BASE_URL}/reset-password`,
    params,
  );

  return data;
};
