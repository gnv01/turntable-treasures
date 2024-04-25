import HeroImage from "../assets/hero-image.png";

export function Hero() {
  return (
    <>
      <div className="box">
        <h1 className="turntable-treasures">Turntable Treasures</h1>
      </div>
      <section className="hero">
        <div className="explore-products">
          <h2>Explore our products</h2>
          <p>
            Looking for the perfect musical accessory to add to your collection?
            Or perhaps an LP to set the mood to while cooking dinner with your
            partner? Turntable Treasures offers a range of, accsesories and
            albums for those who like a great musical selection.
          </p>
        </div>
        <a href="·" className="carousel-redirect">
          <img src={HeroImage} alt="" />
        </a>
      </section>
    </>
  );
}
