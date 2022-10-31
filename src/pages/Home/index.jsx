import Header from "../../components/Header";
import StepInstruction from "../../components/StepInstruction";
import TopHeader from "../../components/TopHeader";
import styles from "./Home.module.css";
import FirstImage from "../../assets/firstImage.svg";
import SecondImage from "../../assets/secondImage.svg";
import ThirdImage from "../../assets/thirdImage.svg";
import Paw from "../../assets/paw.svg";
import Sear from "../../assets/sear.svg";
import Agende from "../../assets/agende.svg";
import Dashed from "../../assets/dashed.svg";
import DashedMin from "../../assets/dashed-min.svg";
import Footer from "../../components/Footer";

function Home() {
  const stepOneTitle = "Cadastre seu";
  const stepOneTitleEmphasis = "animal";
  const isOrderHorizontal = true;
  return (
    <div className="Home">
      <TopHeader />
      <Header />

      <div className={styles.Content}>
        <StepInstruction
          title={stepOneTitle}
          emphasisis={stepOneTitleEmphasis}
          orderHorizontal={isOrderHorizontal}
          image={FirstImage}
          icon={Paw}
        />

        <div className={styles.Dashed}>
          <img src={Dashed} alt="dashed" />
        </div>

        <div className={styles.DashedMin}>
          <img src={DashedMin} alt="dashed" />
        </div>

        <StepInstruction
          title={stepOneTitle}
          emphasisis={stepOneTitleEmphasis}
          orderHorizontal={!isOrderHorizontal}
          image={SecondImage}
          icon={Sear}
        />

        <div className={styles.DashedTransform}>
          <img src={Dashed} alt="dashed" />
        </div>

        <div className={styles.DashedMinTransform}>
          <img src={DashedMin} alt="dashed" />
        </div>

        <StepInstruction
          title={stepOneTitle}
          emphasisis={stepOneTitleEmphasis}
          orderHorizontal={isOrderHorizontal}
          image={ThirdImage}
          icon={Agende}
        />

        <Footer />
      </div>
    </div>
  );
}

export default Home;
