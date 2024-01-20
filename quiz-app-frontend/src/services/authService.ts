import { apiRequest } from "./api-client";

interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}

interface LogInRequest {
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

export const signIn = async ({ email, password }: LogInRequest) => {
  return await apiRequest({
    url: "/auth/login",
    data: { email, password },
    method: "POST",
    token: "",
  });
};
