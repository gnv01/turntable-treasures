import Edifier from "./assets/edifier.png";
import Store from "./assets/store1.png";
import ATLP from "./assets/at-lp.png";
import TheCar from "./assets/thecar.png";
import Tranq from "./assets/tranquility_760x.png";
import TSL from "./assets/tsrtame.png";

import { useEffect, useState } from "react";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

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

  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
      <header className="header">
        <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
          <button
            onClick={handleNavToggle}
            aria-controls="primary-navigation"
            aria-expanded={isNavVisible}
            className="mobile-nav-toggle"
          >
            <span className="menu-button">
              {isNavVisible ? "Close" : "Menu"}
            </span>
          </button>
          <ul
            id="primary-navigation"
            data-visible={isNavVisible}
            className="primary-navigation"
          >
            <li>
              <a href="./createAccount.html" className="nav-a">
                create account
              </a>
            </li>
            <li>
              <a href="./login.html" className="nav-a">
                login
              </a>
            </li>
            <li>
              <a href="./products.html" className="nav-a">
                all products
              </a>
            </li>
            <li>
              <a href="./about.html" className="nav-a">
                who we are
              </a>
            </li>
          </ul>

          <button
            onClick={toggleCartVisibility}
            aria-controls="cart-btn"
            aria-expanded={isCartVisible}
            className="mobile-nav-toggle-cart"
          >
            <span className="menu-button">
              {isCartVisible ? "Close" : "Cart"}
            </span>
          </button>
        </nav>
        <div className="box">
          <h1 className="turntable-treasures">TURNTABLE TREASURES</h1>
        </div>
      </header>
      <main className="hero">
        <div className="explore-products">
          <h1>Explore our products.</h1>
          <p>
            Looking for the perfect musical accessory to add to your collection?
            Or perhaps an LP to listen to while cooking that dinner with your
            partner? Turntable Treasures offers a range of, accsesories and
            albums for those who like a great musical selection.
          </p>
        </div>
        <a href="·" className="carousel-redirect">
          <img src={Store} alt="" />
        </a>
      </main>

      <section>
        <div className="card-container">
          <div className="first-sm-card sm-card">
            <h2>WHAT'S HOT</h2>
            <p className="">
              A peek into our new arrivals so you can always find new drops.
            </p>
          </div>
          <div className="sm-card">
            <img
              src={TSL}
              alt="Tame Impala - The Slow Rush Collectors Edition"
            />
            <div className="card-body">
              <p className="product-title">
                Tame Impala - The Slow Rush Collectors Edition
              </p>

              <div className="price-and-cart">
                <p className="product-price">$85</p>
                <a href="#" className="add-to-cart">
                  add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="sm-card">
            <img
              src={Tranq}
              alt="Arctic Monkeys - Tranquility Base Hotel & Casino"
            />
            <div className="card-body">
              <p className="product-title">
                Arctic Monkeys - Tranquility Base Hotel & Casino
              </p>
              <div className="price-and-cart">
                <p className="product-price">$30</p>
                <a href="#" className="add-to-cart">
                  add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="sm-card">
            <img src={TheCar} alt="Arctic Monkeys - The Car" />
            <div className="card-body">
              <p className="product-title">Arctic Monkeys - The Car</p>
              <div className="price-and-cart">
                <p className="product-price">$35</p>
                <a href="#" className="add-to-cart">
                  add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="card-container">
          <div className="first-big-card big-card">
            <h2>a selection of our must-haves.</h2>
            <p className="">
              Products that were hand picked for people who love things that are
              as beautiful as they are useful.
            </p>
          </div>
          <div className="big-card">
            <img src={Edifier} alt="Edifier Speakers" />
            <div className="product-description">
              <p className="product-title">Edifier</p>
              <span className="product-price">$110</span>
              <a href="." className="add-to-cart">
                add to cart
              </a>
            </div>
          </div>
          <div className="big-card">
            <img src={ATLP} alt="Audio-Technica - Record Player" />
            <div className="product-description">
              <p className="product-title">Audio-Technica - Record Player</p>
              <span className="product-price">$125</span>
              <a href="." className="add-to-cart">
                add to cart
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="more-products">
          <a href="">
            <h1>Find more treasures here.</h1>
          </a>
        </div>
      </section>

      <section>
        <div className="newsletter">
          <h1>Subscribe to our newsletter.</h1>
          <form className="newsletter-input-form">
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder="e-mail address"
                aria-label="email address"
                aria-invalid="false"
                className="input-field-newsletter text-center"
              />
            </div>
            <div className="button-container">
              <button type="button" className="newsletter-submit">
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
