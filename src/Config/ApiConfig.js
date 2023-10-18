import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/";
if (localStorage.getItem("_token") && localStorage.getItem("user")) {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("_token")}`;
}
