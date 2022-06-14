import axios, { AxiosRequestConfig } from "axios";
import moment from "moment";
import { reissuanceToken } from "../../api/Auth";
import RefreshError from "../../class/RefreshError";
import storageKeys from "../../constant/storageKeys";
import cookie from "react-cookies";

const saveTokenInReqestHeader = async (
  config: AxiosRequestConfig
): Promise<AxiosRequestConfig> => {
  if (!config.headers || typeof window === "undefined") {
    return config;
  }

  let accessToken = localStorage.getItem(storageKeys.accessToken);
  const refreshToken = localStorage.getItem(storageKeys.refreshToken);
  const expiresAt = localStorage.getItem(storageKeys.expiresAt);

  if (!refreshToken || !expiresAt || !accessToken) {
    //토큰이 없거나 만료 시각이 없다면 인증 실패
    throw new RefreshError();
  }

  if (moment(moment.now()).isBefore(moment(expiresAt))) {
    //현재 시각이 expiresAt을 지나지 않았을 경우
    //만료되지 않았다고 생각한다.
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  }

  //토큰 리프레시 시작
  try {
    const { data } = await reissuanceToken(refreshToken);
    const { accessToken: newAT, refreshToken: newRT } = data;

    //엑세스 토큰 업데이트
    accessToken = newAT;

    const d = new Date();
    d.setFullYear(3000);

    //로컬스토리지에 저장
    localStorage.setItem(storageKeys.accessToken, newAT);
    localStorage.setItem(storageKeys.refreshToken, newRT);
    localStorage.setItem(
      storageKeys.expiresAt,
      moment().add(30, "days").toISOString()
    );

    cookie.save(storageKeys.accessToken, newAT, {
      path: "/",
      expires: d,
    });
    cookie.save(storageKeys.refreshToken, newRT, {
      path: "/",
      expires: d,
    });
    cookie.save(storageKeys.expiresAt, moment().add(30, "days").toISOString(), {
      path: "/",
      expires: d,
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      //토큰 리프레시 실패
      throw new RefreshError();
    }
  }

  config.headers["Authorization"] = `Bearer ${accessToken}`;

  return config;
};

export { saveTokenInReqestHeader };
