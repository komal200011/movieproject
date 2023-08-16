import axios from "axios";
import { MAIN_URL } from "./Url";
//let token = localStorage.getItem("_token");
////////////////////////////////////////////

export function getMovies() {
  return axios.get(`${MAIN_URL}movies`);
}
export function getSearch(data) {
  return axios.get(`${MAIN_URL}search?query=${data}`);
}
///////////////////////////////////////////////
