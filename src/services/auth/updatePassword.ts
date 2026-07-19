import http from "@/api/httpClient";
import type { Password } from "@/lib/validation";

export interface UpdatePasswordPayload {
  oldPassword: Password;
  newPassword: Password;
}

export const updatePasswordService = async (params: UpdatePasswordPayload) => {
  const { data } = await http.post(
    `${import.meta.env.BASE_URL}/update-password`,
    params,
  );

  return data;
};
