import uri from "../../constant/uri";
import { requestWithNoToken } from "../../utils/axios";
import { ReissuanceTokenResponse } from "./interface";

const reissuanceToken = (refreshToken: string) => {
  return requestWithNoToken.put<ReissuanceTokenResponse>(uri.auth, {
    "refresh-token": refreshToken,
  });
};

export { reissuanceToken };
