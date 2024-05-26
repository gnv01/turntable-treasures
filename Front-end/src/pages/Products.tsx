import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
import { ProductInterface } from "../interfaces/ProductInterface";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export function Products() {
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
    <>
      <NavBar />
      <section className="products-list">
        <div className="products-hero">
          <h1 className="big-titles">All our products</h1>
        </div>
        <div className="product-pagination">
          {products.slice(0, 8).map((product) => (
            <div className="sm-card" key={product.id}>
              <img src={product.productImage} alt="Image of the product" />
              <div className="card-body">
                <p className="product-title">{product.productName}</p>
                <div className="price-and-cart">
                  <p className="product-price">€{product.productPrice}</p>
                  <a href="#" className="add-to-cart">
                    add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </section>
    </>
  );
}
