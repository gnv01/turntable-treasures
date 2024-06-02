import { useContext, useEffect, useState } from "react";
import { getProducts } from "../../services/ProductService";
import { ProductInterface } from "../../types/ProductInterface";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext)!;

  return (
    <section>
      <div className="card-container">
        <div className="first-sm-card sm-card">
          <h2>WHAT'S HOT</h2>
          <p>
            Take a peek into our new arrivals so you can always find new drops.
          </p>
        </div>

        {products.slice(0, 3).map((product) => (
          <div className="sm-card" key={product.id}>
            <img
              onClick={() => navigate(`/products/${product.id}`)}
              src={product.productImage}
              alt="Image of the product"
            />
            <div className="card-body">
              <p className="product-title">
                {product.album
                  ? `${product.album.artistName} - `
                  : `${product.productBrand} - `}
                {product.productName}
              </p>
              <div className="price-and-cart">
                <p className="product-price">€{product.productPrice}</p>
                <p className="product-category">{product.productCategory}</p>
                <button
                  className="add-to-cart"
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      product: product,
                      quantity: 1,
                    })
                  }
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
