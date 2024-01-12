import axios from "axios";
import { Event } from "../../types";

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

export const getHello = async (): Promise<String> => {
  const response = await api
    .get("/")
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return response;
};
