export interface ProductInterface {
  id: number;
  productName: string;
  productPrice: number;
  productDescription: string;
  productImage: string;
  productCategory: string;
  productStock: number;
  productBrand: string;
}

/* We create an interface so the TypeScript compiler can check if 
the data we receive from the API matches the structure we expect. 
This way, we can avoid runtime errors and make our code more robust.
 */
