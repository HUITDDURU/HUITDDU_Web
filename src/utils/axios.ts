import axios from "axios";
import baseURL from "../constant/baseURL";

const request = axios.create({ baseURL: baseURL });
const requestWithNoToken = axios.create({
  baseURL: baseURL,
});

export { request, requestWithNoToken };
