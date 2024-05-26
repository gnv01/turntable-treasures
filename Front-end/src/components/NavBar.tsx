import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
import { ProductInterface } from "../interfaces/ProductInterface";

export function NavBar() {
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

  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleNavToggle = () => {
    setIsNavVisible((prev) => !prev);
  };

  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <button
        onClick={handleNavToggle}
        aria-controls="primary-navigation"
        aria-expanded={isNavVisible}
        className="mobile-nav-toggle"
      >
        <span className="menu-button">{isNavVisible ? "Close" : "Menu"}</span>
      </button>
      <ul
        id="primary-navigation"
        data-visible={isNavVisible}
        className="primary-navigation"
      >
        <li>
          <a href="" className="nav-a">
            login
          </a>
        </li>
        <li>
          <a href="/products" className="nav-a">
            all products
          </a>
        </li>
        <li>
          <a href="/about" className="nav-a">
            who we are
          </a>
        </li>
        <li>
          <a href="/about" className="nav-a">
            terms and conditions
          </a>
        </li>
      </ul>

      <button
        onClick={toggleCartVisibility}
        aria-controls="cart-menu"
        aria-expanded={isCartVisible}
        className="mobile-nav-toggle-cart"
      >
        <span className="menu-button">{isCartVisible ? "Close" : "Cart"}</span>
      </button>
      <section
        id="cart-menu"
        className="cart-menu"
        data-visible={isCartVisible}
      >
        <div className="empty-cart">
          <h1 className="cart-title">There's nothing in your cart!</h1>
          <p className="cart-text">We can fix that</p>
          <a type="button" className="cart-button-explore" href="/products">
            Explore products
          </a>
        </div>
      </section>
    </nav>
  );
}
