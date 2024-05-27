import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Pagination from "../components/Pagination";
import { ProductInterface } from "../types/ProductInterface";
import { getProducts } from "../services/ProductService";

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

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentItems = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <NavBar />
      <section className="products-list">
        <div className="products-hero">
          <h1 className="big-titles">All our products</h1>
        </div>
        <div className="product-pagination">
          {currentItems.map((product) => (
            <div className="sm-card" key={product.id}>
              <img src={product.productImage} alt="Image of the product" />
              <div className="card-body">
                <p className="product-title">
                  {product.album
                    ? `${product.album.artistName} - `
                    : `${product.productBrand} - `}
                  {product.productName}
                </p>
                <div className="price-and-cart">
                  <p className="product-price">€{product.productPrice}</p>
                  <a href="#" className="add-to-cart">
                    add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
          <Pagination
            itemsPerPage={productsPerPage}
            totalItems={products.length}
            paginate={paginate}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
