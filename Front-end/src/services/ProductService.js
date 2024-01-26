import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

export const getProducts = () => {
  return axios.get(API_URL);
};
