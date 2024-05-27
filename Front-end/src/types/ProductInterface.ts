import { AlbumInterface } from "./AlbumInterface";
import { BaseItemInterface } from "./BaseItemInterface";

export interface ProductInterface extends BaseItemInterface {
  id: number;
  productName: string;
  productPrice: number;
  productDescription: string;
  productImage: string;
  productCategory: string;
  productStock: number;
  productBrand: string;
  album: AlbumInterface;
}

/* We create an interface for products so the TypeScript compiler can check if 
the data we receive from the API matches the structure we expect. 
This way, we can avoid runtime errors and make our code more robust.
 */
