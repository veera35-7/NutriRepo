import axios from "axios";

export const API = axios.create({
  baseURL: "https://YOUR-BACKEND.onrender.com/api"
});
