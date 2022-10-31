import styles from "./Header.module.css";
import logo from "../../../assets/logo.svg";
import logoMoile from "../../../assets/logo-mobile.svg";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

function Header() {
  const { width } = useWindowDimensions();

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
      <button className={styles.ButtonStart}> Comece agora! </button>
    </div>
  );
}

export default Header;
