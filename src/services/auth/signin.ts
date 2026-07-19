import http from "@/api/httpClient";
import type { Email, Password } from "@/lib/validation";

export interface SigninPayload {
  email: Email;
  password: Password;
}

export const signinService = async (params: SigninPayload) => {
  const { data } = await http.post(
    `${import.meta.env.BASE_URL}/signin`,
    params,
  );

  return data;
};
