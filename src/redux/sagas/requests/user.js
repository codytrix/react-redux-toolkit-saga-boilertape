import axios from "axios";

export function requestGetUser() {
  return axios.get(import.meta.env.VITE_API_URL + "/user");
}
