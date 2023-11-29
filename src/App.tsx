function App() {
  return (
    <>
      <header id="landing-p">
        <div id="hero">
          <button>
            <span>Menu</span>
          </button>
          <nav id="nav-home" className="navbar"></nav>
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
        <div className="carousel-container">
          <a href="" className="carousel-redirect">
            <div className="carousel">
              <img src="" alt="" />
            </div>
          </a>
        </div>

        <section>
          <div className="card-container">
            <div className="first-sm-card sm-card">
              <h2>WHAT'S HOT</h2>
              <p className="card-title product-title">
                A peak into our new arrivals so you can always find new drops.
              </p>
            </div>
            <div className="sm-card">
              <img src="" className="card-img-top" alt="match-strike" />
              <div className="card-body">
                <p className="card-title product-title">
                  Tame Impala - Currents LP
                </p>
                <p className="product-price">£35</p>
                <a href="#" className="add-to-cart">
                  add to cart
                </a>
              </div>
            </div>
            <div className="sm-card">
              <img src="" className="card-img-top" alt="moss ashtray" />
              <div className="card-body">
                <p className="card-title product-title">
                  Gorillaz - Plastic Beach LP
                </p>
                <p className="product-price">£38</p>
                <a href="#" className="add-to-cart">
                  add to cart
                </a>
              </div>
            </div>
            <div className="sm-card">
              <img src="" className="card-img-top" alt="glupie cup" />
              <div className="card-body">
                <h5 className="card-title product-title">
                  Kendrik Lamar - DAMN. LP
                </h5>
                <p className="product-price">£35</p>
                <a href="#" className="add-to-cart">
                  add to cart
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="card-container">
          <div className="first-big-card bg-card">
            <h2>a selection of our must-haves.</h2>
            <p>
              Products that were hand picked for people who love things that are
              as beautiful as they are useful.
            </p>
          </div>
          <div className="bg-card">
            <img className="big-card-img" src="" alt="" />
            <div className="product-description">
              <p className="product-name">Edifier</p>
              <span className="product-price">$120</span>
              <a href="." className="add-to-cart">
                add to cart
              </a>
            </div>
          </div>
          <div className="bg-card">
            <img src="" alt="" />
            <div className="product-description">
              <p className="product-name">Edifier</p>
              <span className="product-price">$120</span>
              <a href="." className="add-to-cart">
                add to cart
              </a>
            </div>
          </div>
        </div>
      </main>
      <a href="./products.html">
        <div id="all-products">
          <h1 className="bti">ALL OF OUR PRODUCTS.</h1>
        </div>
      </a>

      <div className="newsletter">
        <h1>Subscribe to our newsletter.</h1>
        <div id="ns-form" className="newsletter-input-form">
          <div id="ns-input">
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="email address"
              aria-label="email address"
              aria-invalid="false"
              className="field-input-newsletter"
            />
          </div>
          <div id="ns-buton">
            <button type="button" className="send-btn-subscribe">
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      <footer id="footer">
        <div className="parent">
          <div className="div1">
            <a href="" className="footer-a">
              contact us
            </a>
          </div>
          <div className="div2">
            <a href="" className="footer-a">
              accsesibility
            </a>
          </div>
          <div className="div3">
            <a href="" className="footer-a">
              privacy policy
            </a>
          </div>
          <div className="div4">
            <a href="" className="footer-a">
              terms of service
            </a>
          </div>
          <div className="div5">
            <a href="#">
              <img src="" alt="instagram" />
            </a>
            <a href="#">
              <img src="" alt="twitter" />
            </a>
            <a href="#">
              <img src="" alt="facebook" />
            </a>
          </div>
        </div>
        <a href="">
          <img src="" alt="cloudHouse tm" id="footer-img" />
        </a>
      </footer>
    </>
  );
}

export default App;
