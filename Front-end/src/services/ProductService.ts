import axios from "axios";

const API_URL_PRODUCTS = "http://localhost:8080/products/all";
const API_URL_PRODUCT_BY_ID = "http://localhost:8080/products";

export const getProducts = () => axios.get(API_URL_PRODUCTS);

export const getProductById = (id: string | number) =>
  axios.get(`${API_URL_PRODUCT_BY_ID}/${id}`);
