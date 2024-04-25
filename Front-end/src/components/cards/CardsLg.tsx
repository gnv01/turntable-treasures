import Edifier from "../../assets/edifier.png";
import ATLP from "../../assets/at-lp.png";

export function CardsLg() {
  return (
    <section>
      <div className="card-container">
        <div className="first-big-card">
          <h2>a selection of our must-haves</h2>
          <p>
            Products that were hand picked for people who love things that are
            as beautiful as they are useful.
          </p>
        </div>
        <div className="big-card">
          <img src={Edifier} alt="Edifier Speakers" />
          <div className="product-description">
            <p className="product-title">Edifier - R1855DB</p>
            <span className="product-price">$110</span>
            <a href="." className="add-to-cart">
              add to cart
            </a>
          </div>
        </div>
        <div className="big-card">
          <img src={ATLP} alt="Audio-Technica - Record Player" />
          <div className="product-description">
            <p className="product-title">Audio-Technica - AT120X SV</p>
            <span className="product-price">$125</span>
            <a href="." className="add-to-cart">
              add to cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
