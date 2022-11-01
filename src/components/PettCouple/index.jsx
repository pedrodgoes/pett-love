import styles from "./PettCouple.module.css";

function PettCouple(props) {
  return (
    <div className={styles.PettCouple}>
      <div className={styles.Container}></div>

      <div className={styles.GroupImages}>
        <img src={props.imgOne} alt="logo" />
        <img src={props.imgSecond} alt="logo" />
        <img src={props.imgThird} alt="logo" />
      </div>

      <p className={styles.NameCouplePett}>{props.nameCouple}</p>
    </div>
  );
}

export default PettCouple;
