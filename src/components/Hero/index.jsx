import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

function Hero() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 600px)");

  const nextPage = () => {
    navigate("/list");
  };

  return (
    <div className={styles.Hero}>
      <div className={styles.HowText}>COMO FUNCIONA</div>
      <div className={styles.SearchText}>
        {isMobile
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

export default Hero;
