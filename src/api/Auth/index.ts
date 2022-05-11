import uri from "../../constant/uri";
import { requestWithNoToken } from "../../utils/axios";
import { TokenResponse } from "./interface";

const reissuanceToken = (refreshToken: string) => {
  return requestWithNoToken.put<TokenResponse>(uri.auth, {
    "refresh-token": refreshToken,
  });
};

const login = (email: string, password: string) => {
  return requestWithNoToken.post<TokenResponse>(uri.auth, {
    email,
    password,
  });
};

export { reissuanceToken, login };
