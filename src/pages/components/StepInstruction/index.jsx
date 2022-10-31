import styles from "./StepInstruction.module.css";

function StepInstruction({ title, emphasisis, orderHorizontal, image, icon }) {
  return (
    <div
      className={styles.StepInstruction}
      // style={
      //   orderHorizontal === true
      //     ? { flexDirection: "row" }
      //     : { flexDirection: "row-reverse" }
      // }
    >
      <div className={styles.Image}>
        <img src={image} alt="logo" width="280px" height="220px" />
      </div>

      <div className={styles.Description}>
        <img src={icon} alt="logo" />
        <div className={styles.Title}>
          {title}
          <span> {emphasisis}</span>
        </div>
        <div className={styles.Text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          egestas, erat et convallis gravida, nisl libero imperdiet dolor, et
          vestibulum tortor quam in nunc.
        </div>
      </div>
    </div>
  );
}

export default StepInstruction;
