import { apiRequest } from "./api-client";

interface SignUpRequest {
    name: string;
    email: string;
    password: string;
  }

export const signUp = async ({ name, email, password }: SignUpRequest) => {
  return await apiRequest({
    url: "/auth/signup",
    data: { name, email, password },
    method: "POST",
    token: "",
  });
};
