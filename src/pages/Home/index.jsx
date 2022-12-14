import Hero from "../../components/Hero";
import StepInstruction from "../../components/StepInstruction";
import Header from "../../components/Header";
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
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  const stepOneTitle = "Cadastre seu";
  const stepOneTitleEmphasis = "animal";
  const stepSecondTitle = "Procuro";
  const stepSecondTitleEmphasis = "pretendentes";
  const stepThirdTitle = "Marque um";
  const stepThirdTitleEmphasis = "encontro";

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="Home">
      <Header />
      <Hero />

      <div className={styles.Content}>
        <StepInstruction
          title={stepOneTitle}
          emphasisis={stepOneTitleEmphasis}
          orderHorizontal
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
          title={stepSecondTitle}
          emphasisis={stepSecondTitleEmphasis}
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
          title={stepThirdTitle}
          emphasisis={stepThirdTitleEmphasis}
          orderHorizontal
          image={ThirdImage}
          icon={Agende}
        />

        <Footer />
      </div>
    </div>
  );
}

export default Home;
