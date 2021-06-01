import axios from "axios";

export function login(user) {
  const promise = axios.post("/auth/login", user);
  return promise;
};

export function join(user) {
  const promise = axios.post("/auth/join", user);
  return promise;
};