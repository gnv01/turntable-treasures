import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";

export function NavBar() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getTotalItems,
  } = useCart();

  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
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

  const handleNavToggle = () => {
    setIsNavVisible((prev) => !prev);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible((prev) => !prev);
  };

  const totalItems = getTotalItems();
  const cartButtonText = isCartVisible
    ? "Close"
    : totalItems > 0
    ? `Cart [${totalItems}]`
    : "Cart";

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
          <a href="/" className="nav-a">
            home
          </a>
        </li>
        <li>
          <a href="/products" className="nav-a">
            all our products
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
        <span className="menu-button">{cartButtonText}</span>
      </button>
      <section
        id="cart-menu"
        className="cart-menu"
        data-visible={isCartVisible}
      >
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h1 className="cart-title">There's nothing in your cart!</h1>
            <p className="cart-text">We can fix that</p>
            <a type="button" className="cart-button-explore" href="/products">
              Explore products
            </a>
          </div>
        ) : (
          <>
            <div className="cart-content">
              <h1 className="cart-title">Cart[{getTotalItems()}]</h1>
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-img-container">
                    <img
                      src={item.product.productImage}
                      alt={item.product.productName}
                      className="cart-item-img"
                    />
                  </div>
                  <div className="item-content">
                    <div className="item-details">
                      <p className="cart-item-text">
                        {item.product.album
                          ? `${item.product.album.artistName} - `
                          : `${item.product.productBrand} - `}
                        {item.product.productName}
                      </p>
                      <p className="cart-item-price">
                        €{item.product.productPrice}
                      </p>
                    </div>
                    <p className="cart-item-category">
                      {item.product.productCategory}
                    </p>

                    <div className="controls-remove">
                      <div className="cart-item-controls">
                        <button
                          className="remove-item-btn"
                          onClick={() => {
                            removeFromCart(item);
                          }}
                        >
                          -
                        </button>
                        <p className="cart-item-quant">{item.quantity}</p>
                        <button
                          className="add-item-btn"
                          onClick={() => {
                            addToCart(item);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button
                className="cart-clear"
                onClick={() => {
                  clearCart();
                }}
              >
                Clear cart
              </button>
            </div>
            <div className="cart-checkout">
              <h1 className="cart-checkout-titles">Subtotal</h1>
              <h2 className="cart-checkout-titles">€{getCartTotal()}</h2>
            </div>
          </>
        )}
      </section>
    </nav>
  );
}
