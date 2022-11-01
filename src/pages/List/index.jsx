import Header from "../../components/Header";
import styles from "./List.module.css";
import Footer from "../../components/Footer";
import PettCouple from "../../components/PettCouple";
import PetOne from "../../assets/guido.svg";
import PetSecond from "../../assets/abigail.svg";
import Heart from "../../assets/heart-yellow.svg";
import Pancho from "../../assets/pancho.svg";
import Kiwi from "../../assets/kiwi.svg";
import Anouncer from "../../assets/anouncer.svg";
import AnouncerMob from "../../assets/anouncer-mob.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

function List() {
  const nameCoupleOne = "Guido e Abigail";
  const nameCoupleSecond = "Pancho e Kiwi ";
  const isMobile = useMediaQuery("(max-width: 880px)");

  return (
    <div className={styles.List}>
      <Header pageList />
      <section className={styles.Section}>
        <p>
          Pets <span>namorando</span>
        </p>
        <span>Duis aute irure dolor in reprehenderit in voluptate</span>
      </section>
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

      {isMobile ? (
        <div className={styles.Anouncer}>
          <img src={AnouncerMob} alt="logo" />
        </div>
      ) : (
        <div className={styles.Anouncer}>
          <img src={Anouncer} alt="logo" />
        </div>
      )}

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

      <Footer />
    </div>
  );
}

export default List;
