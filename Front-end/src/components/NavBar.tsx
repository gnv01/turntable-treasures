import { useEffect, useState } from "react";

export function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleNavToggle = () => {
    setIsNavVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };
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
            create account
          </a>
        </li>
        <li>
          <a href="" className="nav-a">
            login
          </a>
        </li>
        <li>
          <a href="" className="nav-a">
            all products
          </a>
        </li>
        <li>
          <a href="" className="nav-a">
            who we are
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
      {/* <section
      id="cart-menu"
      className="cart-menu"
      data-visible={isCartVisible}
    >
      {products.length === 0 && (
        <div>
          <h1 className="cart-title">There's nothing in your cart!</h1>
          <p className="cart-text">We can fix that</p>
          <button type="button" className="cart-button-explore">
            Explore products
          </button>
        </div>
      )}
      {products.map((product) => {
        return (
          <>
            <h1 className="cart-title">
              cart{"(" + productCartCount + ")"}
            </h1>
            <div>
              <img src="" alt="" className="cart-product-image" />
              <p className="cart-product-title">{product.name}</p>
              <p className="cart-product-category">{product.category}</p>
              <p className="cart-product-price">{product.price}</p>
              <div></div>
            </div>
          </>
        );
      })}
    </section> */}
    </nav>
  );
}
