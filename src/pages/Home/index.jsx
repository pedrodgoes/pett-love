import Header from "../components/Header";
import StepInstruction from "../components/StepInstruction";
import TopHeader from "../components/TopHeader";
import styles from "./Home.module.css";
import FirstImage from "../../assets/firstImage.svg";
import SecondImage from "../../assets/secondImage.svg";
import ThirdImage from "../../assets/thirdImage.svg";
import Paw from "../../assets/paw.svg";
import Sear from "../../assets/sear.svg";
import Agende from "../../assets/agende.svg";

function App() {
  const stepOneTitle = "Cadastre seu";
  const stepOneTitleEmphasis = "animal";
  const isOrderHorizontal = true;
  return (
    <div className="App">
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

        <StepInstruction
          title={stepOneTitle}
          emphasisis={stepOneTitleEmphasis}
          orderHorizontal={!isOrderHorizontal}
          image={SecondImage}
          icon={Sear}
        />

        <StepInstruction
          title={stepOneTitle}
          emphasisis={stepOneTitleEmphasis}
          orderHorizontal={isOrderHorizontal}
          image={ThirdImage}
          icon={Agende}
        />
      </div>
    </div>
  );
}

export default App;
