import axios from "axios";

const api = axios.create({
  baseURL: "https://bff-tech-challenge.vercel.app/bff",
});

export default api;
