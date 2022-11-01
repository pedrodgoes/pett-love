import styles from "./Header.module.css";
import { BiMenuAltLeft, BiUser } from "react-icons/bi";
import useMediaQuery from "../../hooks/useMediaQuery";
import logo from "../../assets/logo.svg";
import logoMobile from "../../assets/logo-mobile.svg";

function Header(pageList) {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div
      className={styles.Header}
      style={pageList ? { backgroundColor: "white" } : ""}
    >
      <button className={styles.ButtonMenu}>
        {" "}
        <BiMenuAltLeft /> <text>Menu</text>{" "}
      </button>
      {isMobile ? (
        <div className={styles.imgLogoMobile}>
          <img src={logoMobile} alt="logo" />
        </div>
      ) : (
        <div className={styles.imgLogo}>
          <img src={logo} alt="logo" />
        </div>
      )}
      <button className={styles.ButtonLogin}>
        {" "}
        <BiUser /> <text>Entrar</text>{" "}
      </button>
    </div>
  );
}

export default Header;
