import "../App.css";
import "../styles/Banner.css";
import logo from "../assets/logo.png";
import Recomendation from "./Recomendation";
function Banner() {
  // eslint-disable-next-line no-unreachable

  return (
    <div className="lmj-banner">
      <div className="lmj-banner-row">
        <img src={logo} alt="La maison de la jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison de la jungle </h1>
      </div>
      <Recomendation />
    </div>
  );
}

export default Banner;
