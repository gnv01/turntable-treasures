import { AlbumInterface } from "./AlbumInterface";
import { BaseItemInterface } from "./BaseItemInterface";
import { ProductInterface } from "./ProductInterface";

export type CartItem = (ProductInterface | AlbumInterface) &
  BaseItemInterface & {
    quantity: number;
  };
