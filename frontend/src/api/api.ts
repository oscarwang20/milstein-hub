import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

const getHello = async () => {
  const response = await api.get("/");
  return response.data;
};

export default getHello;
