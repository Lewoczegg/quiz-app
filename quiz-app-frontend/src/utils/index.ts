import { JwtPayload, jwtDecode } from "jwt-decode";

export const isTokenExpired = (token: string): boolean => {
  const decodedToken = jwtDecode<JwtPayload>(token);
  const currentTime = Date.now() / 1000;
  return decodedToken.exp ? decodedToken.exp < currentTime : false;
};
