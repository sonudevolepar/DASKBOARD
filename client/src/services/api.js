import axios from "axios";

const API = axios.create({
  baseURL: "https://daskboard-dpc0.onrender.com/api",
   withCredentials: true,
});

export default API;