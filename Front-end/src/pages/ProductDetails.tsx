import { useContext, useEffect, useState } from "react";
import { ProductInterface } from "../types/ProductInterface";
import { getProductById } from "../services/ProductService";
import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { CartContext } from "../context/CartContext";
import SongList from "../components/SongList";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getProductById(id)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    } else {
      navigate("/products");
    }
  }, [id, navigate]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { addToCart } = useContext(CartContext)!;

  return (
    <>
      <NavBar />
      <article className="product">
        <img
          src={product.productImage}
          alt={product.productName}
          className="product-big-image"
        />
        <div className="product-specs">
          <p className="subtitles">
            {product.album
              ? `${product.album.artistName} - `
              : `${product.productBrand} - `}
            {product.productName}
          </p>
          <p className="product-description-category">
            {product.productCategory}
          </p>
          <p className="product-big-description">
            {product.productDescription} <br />
            <br />
            {product.album ? `${product.album.albumFormat}` : ""}
          </p>
          <p className="product-big-brand">
            {product.album ? `Discography: ` : `Brand: `}
            {product.productBrand}
          </p>
          <p className="product-big-price">€{product.productPrice}</p>
          <button
            className="add-to-cart-big"
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
          <div>
            {product.album ? <SongList songs={product.album?.songs} /> : ""}
          </div>
        </div>
      </article>
      <Newsletter />
      <Footer />
    </>
  );
}
