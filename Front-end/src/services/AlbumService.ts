import axios from "axios";

const API_URL_ALBUMS = "http://localhost:8080/albums/all";

export const getAlbums = () => {
  return axios.get(API_URL_ALBUMS);
};
