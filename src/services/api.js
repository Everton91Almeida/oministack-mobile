import axios from "axios";

const api = axios.create({
  baseURL: "https://oministack-everton.herokuapp.com"
});

export default api;
