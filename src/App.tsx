export function App() {
  return (
    <>
      <header>
        <nav>
          <button>menu</button>
          <button>cart</button>
        </nav>
        <h1>Turntable Treasures</h1>
      </header>
      <main>
        <section>
          <h2>Explore Our Products</h2>
          <p>
            Looking for the perfect musical accessory to add to your collection?
            Or perhaps an LP to listen to while cooking that dinner with your
            partner? Turntable Treasure offers a range of, accsesories and
            albums for those who like a great musical selection.
          </p>
          <img src="" alt="Carousel Images" />
        </section>
        <section id="small-cards">
          <div id="sm-card-1">
            <img src="" alt="" />
            <h3>What's Hot.</h3>
            <p>A peek into our new arrivals to combat that FOMO.</p>
          </div>
          <div id="sm-card-2">
            <img src="" alt="" />
            <p>Product name</p>
            <p>Product price</p>
            <a href="">add to cart button</a>
          </div>
          <div id="sm-card-3">
            <img src="" alt="" />
            <p>Product name</p>
            <p>Product price</p>
            <a href="">add to cart button</a>
          </div>
          <div id="sm-card-4">
            <img src="" alt="" />
            <p>Product name</p>
            <p>Product price</p>
            <a href="">add to cart button</a>
          </div>
        </section>
        <section>
          <div id="big-card-1">
            <img src="" alt="" />
            <h4>A selection of out must-haves.</h4>
            <p>
              Products that were hand picked for people who love things that are
              as beautiful as they are useful.
            </p>
          </div>
          <div id="big-card-2">
            <img src="" alt="" />
            <p>Product name</p>
            <p>Product price</p>
            <a href="">add to cart button</a>
          </div>
          <div id="big-card-3">
            <img src="" alt="" />
            <p>Product name</p>
            <p>Product price</p>
            <a href="">add to cart button</a>
          </div>
        </section>
      </main>
      <section>
        <h5>Find more treasures here.</h5>
      </section>
      <section>
        <h6>Sign up to our newsletter</h6>
        <p>Be the first to hear about our latest products</p>
        <form>
          <input type="text" placeholder="E-mail address" />
          <button>Subscribe</button>
        </form>
      </section>
      <footer>
        <a href="">Contact us</a>
        <a href="">FAQS</a>
        <a href="">Privacy policy</a>
        <a href="">Terms of service</a>
        <img src="" alt="Turntable Treasures" />
      </footer>
    </>
  );
}
