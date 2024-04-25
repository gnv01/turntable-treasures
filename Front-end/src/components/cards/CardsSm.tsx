import TheCar from "../../assets/thecar.png";
import Tranquility from "../../assets/tranquility_760x.png";
import TSL from "../../assets/tsrtame.png";

export function CardsSm() {
  return (
    <section>
      <div className="card-container">
        <div className="first-sm-card sm-card">
          <h2>WHAT'S HOT</h2>
          <p>
            Take a peek into our new arrivals so you can always find new drops.
          </p>
        </div>
        <div className="sm-card">
          <img src={TSL} alt="Tame Impala - The Slow Rush Collectors Edition" />
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
            src={Tranquility}
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
  );
}
