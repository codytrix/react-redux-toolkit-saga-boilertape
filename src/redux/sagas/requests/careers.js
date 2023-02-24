import axios from "axios";

export function requestGetCareers() {
  return axios.get(import.meta.env.VITE_API_URL + "/careers");
}

export function requestGetCareer(id) {
  return axios.get(import.meta.env.VITE_API_URL + "/careers/" + id);
}
