import Edifier from "./assets/edifier.png";
import Store from "./assets/store1.png";
import ATLP from "./assets/at-lp.png";
import TheCar from "./assets/thecar.png";
import Tranq from "./assets/tranquility_760x.png";
import TSL from "./assets/tsrtame.png";

function App() {
  return (
    <>
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
        <div className="carousel-container">
          <a href="·" className="carousel-redirect">
            <div className="carousel">
              <img src={Store} alt="" />
            </div>
          </a>
        </div>
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
              className="card-img-top"
              alt="Tame Impala - The Slow Rush Collectors Edition"
            />
            <div className="card-body">
              <p className="product-title">
                Tame Impala - The Slow Rush Collectors Edition
              </p>
              <p className="product-price">$85</p>
              <a href="#" className="add-to-cart">
                add to cart
              </a>
            </div>
          </div>
          <div className="sm-card">
            <img
              src={Tranq}
              className="card-img-top"
              alt="Arctic Monkeys - Tranquility Base Hotel & Casino"
            />
            <div className="card-body">
              <p className="product-title">
                Arctic Monkeys - Tranquility Base Hotel & Casino
              </p>
              <p className="product-price">$30</p>
              <a href="#" className="add-to-cart">
                add to cart
              </a>
            </div>
          </div>
          <div className="sm-card">
            <img
              src={TheCar}
              className="card-img-top"
              alt="Arctic Monkeys - The Car"
            />
            <div className="card-body">
              <h5 className="product-title">Arctic Monkeys - The Car</h5>
              <p className="product-price">$35</p>
              <a href="#" className="add-to-cart">
                add to cart
              </a>
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
            <h1>FIND MORE TREASURES HERE.</h1>
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
