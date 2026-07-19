import http from "@/api/httpClient";
import type { Code, Email } from "@/lib/validation";

export interface ValidateEmailPayload {
  email: Email;
  code: Code;
}

export const validateEmailervice = async (params: ValidateEmailPayload) => {
  const { data } = await http.post(
    `${import.meta.env.BASE_URL}/validate-email`,
    params,
  );

  return data;
};
