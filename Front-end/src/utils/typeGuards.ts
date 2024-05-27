import { ProductInterface } from "../types/ProductInterface";
import { AlbumInterface } from "../types/AlbumInterface";

export const isProduct = (item: any): item is ProductInterface => {
  return (
    item &&
    typeof item.id === "number" &&
    typeof item.productName === "string" &&
    typeof item.productImage === "string" &&
    typeof item.productPrice === "number" &&
    typeof item.productDescription === "string" &&
    typeof item.productCategory === "string" &&
    typeof item.productStock === "number" &&
    typeof item.productBrand === "string"
  );
};

export const isAlbum = (item: any): item is AlbumInterface => {
  return (
    item &&
    typeof item.idAlbum === "number" &&
    typeof item.artistName === "string" &&
    typeof item.albumDate === "string" &&
    typeof item.albumGenre === "string" &&
    typeof item.albumFormat === "string" &&
    Array.isArray(item.songs) &&
    item.songs.every(
      (song: any) =>
        typeof song.id === "number" &&
        typeof song.title === "string" &&
        typeof song.duration === "number"
    )
  );
};
