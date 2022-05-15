import axios from "axios";
import baseURL from "../../constant/baseURL";
import { saveTokenInReqestHeader } from "./interceptors";

const request = axios.create({ baseURL: baseURL });
const requestWithNoToken = axios.create({
  baseURL: baseURL,
});

request.interceptors.request.use(saveTokenInReqestHeader);

export { request, requestWithNoToken };
