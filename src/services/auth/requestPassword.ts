import http from "@/api/httpClient";
import type { Email } from "@/lib/validation";

export interface RequestPasswordCodePayload {
  email: Email;
}

export const requestPasswordCodeService = async (
  params: RequestPasswordCodePayload,
) => {
  const { data } = await http.post(
    `${import.meta.env.BASE_URL}/request-password-code`,
    params,
  );

  return data;
};
