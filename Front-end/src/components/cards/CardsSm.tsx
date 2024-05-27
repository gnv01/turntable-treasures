import { useEffect, useState } from "react";
import { getProducts } from "../../services/ProductService";
import { ProductInterface } from "../../types/ProductInterface";

export function CardsSm() {
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

  return (
    <section>
      <div className="card-container">
        <div className="first-sm-card sm-card">
          <h2>WHAT'S HOT</h2>
          <p>
            Take a peek into our new arrivals so you can always find new drops.
          </p>
        </div>

        {products.slice(0, 3).map((products) => (
          <div className="sm-card" key={products.id}>
            <img src={products.productImage} alt="Image of the product" />
            <div className="card-body">
              <p className="product-title">
                {products.album.artistName} - {products.productName}
              </p>
              <div className="price-and-cart">
                <p className="product-price">€{products.productPrice}</p>
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
