import { useContext, useEffect, useState } from "react";
import { getProducts } from "../../services/ProductService";
import { ProductInterface } from "../../types/ProductInterface";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

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

  const { addToCart } = useContext(CartContext)!;

  const specificProductIds = [36, 37];

  const specificProducts = products.filter((product) =>
    specificProductIds.includes(product.id)
  );

  const navigate = useNavigate();

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
