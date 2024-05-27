import axios from "axios";

const API_URL_PRODUCTS = "http://localhost:8080/products/all";

const API_URL_SONGS = "http://localhost:8080/songs/all";

export const getProducts = () => axios.get(API_URL_PRODUCTS);

export const getSongs = () => {
  return axios.get(API_URL_SONGS);
};
