import styles from "./Footer.module.css";
import logoText from "../../assets/logo-text.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import clickweb from "../../assets/clickweb.svg";
import { IoIosArrowDown } from "react-icons/io";
import { SlArrowUp } from "react-icons/sl";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Footer() {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.Footer}>
      <div className={styles.Body}>
        <div className={styles.Info}>
          <img src={logoText} alt="logo" width="450px" height="112px" />
          <div className={styles.About}>
            <div className={styles.AboutText}>
              <text>Sobre nós</text>
              <text>Como funciona</text>
              <text>Dúvidas frequentes</text>
              <text>Blog</text>
            </div>

            <div className={styles.AboutText}>
              <text>Pets namorando</text>
              <text>Comece agora!</text>
              <text>Contato</text>
              <text />
            </div>

            <div className={styles.AboutText}>
              <text id={styles.Help}>Ajude uma entidade</text>
              <div>
                <text id={styles.Bank}>
                  SOS Vida Animal <IoIosArrowDown />
                </text>
                <text id={styles.Bank}>
                  Banco Itaú: Ag <span>8804</span> Conta <span>01234-5</span>{" "}
                  PIX: <span>43.660.696/0001-95</span>
                </text>
                <text />
                <text />
              </div>
            </div>
          </div>
          <div className={styles.Policy}>
            <text>Política de privacidade</text>
            <div id={styles.Bullet} />
            <text>Termos de uso</text>
            <div id={styles.Bullet} />
            <text>Política de Cookies</text>
            <div id={styles.Bullet} />
            <text>Política de cancelamento</text>
          </div>
        </div>
        <div className={styles.Contacts}>
          <div className={styles.ContainerInput}>
            <label>Receba nossas novidades</label>
            <div className={styles.InputContact}>
              <input type="text" placeholder="Digite seu e-mail" />
              <button> Cadastrar </button>
            </div>
          </div>
          <div className={styles.IconsFooter}>
            <div className={styles.ContainerIconFooter}>
              <img src={facebook} alt="logo" />
            </div>
            <div className={styles.ContainerIconFooter}>
              <img src={instagram} alt="logo" />
            </div>
            <div className={styles.ContainerIconFooter}>
              <img src={youtube} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Bottom}>
        <text>
          Pett Love - Relacionamento | <p>CNPJ: 43.660.696/0001-95</p>
        </text>
        {width > 600 ? (
          <>
            <a id={styles.ArrowUp} href="#top">
              <SlArrowUp />
            </a>
            <img src={clickweb} alt="logo" />
          </>
        ) : (
          <>
            <img src={clickweb} alt="logo" />
            <a id={styles.ArrowUp} href="#top">
              <SlArrowUp />
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Footer;
