import styles from "./TopHeader.module.css";
import { BiMenuAltLeft, BiUser } from "react-icons/bi";

function TopHeader() {
  return (
    <div className={styles.TopHeader}>
      <button className={styles.ButtonMenu}>
        {" "}
        <BiMenuAltLeft /> <text>Menu</text>{" "}
      </button>
      <button className={styles.ButtonLogin}>
        {" "}
        <BiUser /> <text>Entrar</text>{" "}
      </button>
    </div>
  );
}

export default TopHeader;
