import http from "@/api/httpClient";
import type { Email, Password } from "@/lib/validation";

export interface SignupPayload {
  email: Email;
  password: Password;
}

export const signupService = async (params: SignupPayload) => {
  const { data } = await http.post(
    `${import.meta.env.BASE_URL}/signup`,
    params,
  );

  return data;
};
