import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";   //실행이 되어야 공통 경로가 들어감 -> 시작 파일에서 import

export function addAuthHeader(authToken) {
  axios.defaults.headers.common["authToken"] = authToken;
};

export function removeAuthHeader() {
  delete axios.defaults.headers.common["authToken"];    //객체 자체를 지움
};