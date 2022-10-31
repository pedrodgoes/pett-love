import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import logoMoile from "../../assets/logo-mobile.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useNavigate } from "react-router-dom";

function Header() {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/list");
  };

  return (
    <div className={styles.Header}>
      <div className={styles.imgLogo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.imgLogoMobile}>
        <img src={logoMoile} alt="logo" />
      </div>
      <div className={styles.HowText}>COMO FUNCIONA</div>
      <div className={styles.SearchText}>
        {width < 600
          ? "Encontre um love para o seu animal sem sair de casa."
          : "Encontre um pretendente para o seu animal"}
      </div>
      <button className={styles.ButtonStart} onClick={nextPage}>
        {" "}
        Comece agora!{" "}
      </button>
    </div>
  );
}

export default Header;
