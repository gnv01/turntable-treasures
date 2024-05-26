import axios from "axios";

const API_URL_PRODUCTS = "http://localhost:8080/products/all";
const API_URL_ALBUMS = "http://localhost:8080/albums/all";
const API_URL_SONGS = "http://localhost:8080/songs/all";

export const getProducts = () => axios.get(API_URL_PRODUCTS);

export const getAlbums = () => {
  return axios.get(API_URL_ALBUMS);
};

export const getSongs = () => {
  return axios.get(API_URL_SONGS);
};
