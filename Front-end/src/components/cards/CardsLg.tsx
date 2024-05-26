import { useEffect, useState } from "react";
import { getProducts } from "../../services/ProductService";
import { ProductInterface } from "../../interfaces/ProductInterface";

export function CardsLg() {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // IDs of the products we want to display in the large cards
  const specificProductIds = [36, 37];

  // Filter the products array to only include the products with the specific IDs
  const specificProducts = products.filter((product) =>
    specificProductIds.includes(product.id)
  );

  return (
    <section>
      <div className="card-container">
        <div className="first-big-card">
          <h2>a selection of our must-haves</h2>
          <p>
            Products that were hand picked for people who love things that are
            as beautiful as they are useful.
          </p>
        </div>

        {specificProducts.map((product) => (
          <div className="big-card" key={product.id}>
            <img src={product.productImage} alt="Image of the product" />
            <div className="card-body">
              <p className="product-title">{product.productName}</p>
              <div className="price-and-cart">
                <p className="product-price">€{product.productPrice}</p>
                <a href="" className="add-to-cart">
                  add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
