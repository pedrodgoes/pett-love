import styles from "./PettCoupleGroup.module.css";
import PettCouple from "../../components/PettCouple";
import PetOne from "../../assets/guido.svg";
import PetSecond from "../../assets/abigail.svg";
import Heart from "../../assets/heart-yellow.svg";
import Pancho from "../../assets/pancho.svg";
import Kiwi from "../../assets/kiwi.svg";

function PettCoupleGroup() {
  const nameCoupleOne = "Guido e Abigail";
  const nameCoupleSecond = "Pancho e Kiwi ";

  return (
    <div className={styles.PettGroup}>
      <div className={styles.PettCoupleGroup}>
        <div>
          <PettCouple
            imgOne={PetOne}
            imgSecond={Heart}
            imgThird={PetSecond}
            nameCouple={nameCoupleOne}
          />
        </div>
        <div>
          <PettCouple
            imgOne={Pancho}
            imgSecond={Heart}
            imgThird={Kiwi}
            nameCouple={nameCoupleSecond}
          />
        </div>
        <div>
          <PettCouple
            imgOne={PetOne}
            imgSecond={Heart}
            imgThird={PetSecond}
            nameCouple={nameCoupleOne}
          />
        </div>
      </div>
    </div>
  );
}

export default PettCoupleGroup;
