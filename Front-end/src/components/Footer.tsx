import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import footerLogo from "../assets/footer-image.png";

export function Footer() {
  return (
    <footer id="footer">
      <div className="parent">
        <div className="div1 footer-titles">
          <a href="" className="footer-a">
            who we are
          </a>
        </div>
        <div className="div2">
          <a href="" className="footer-a">
            terms of service
          </a>
        </div>
        <div className="div3">
          <a href="" className="footer-a">
            accessibility
          </a>
        </div>
        <div className="div4">
          <a href="/">
            <img src={instagram} alt="instagram" className="footer-icons" />
          </a>
          <a href="/">
            <img src={twitter} alt="twitter" className="footer-icons" />
          </a>
          <a href="/">
            <img src={facebook} alt="facebook" className="footer-icons" />
          </a>
        </div>
      </div>
      <a href="">
        <img
          src={footerLogo}
          alt="Turntable Treasures &copy;"
          className="footer-img"
        />
      </a>
    </footer>
  );
}
