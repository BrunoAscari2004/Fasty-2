import { CarAddContainer } from "../../components/Body/CarAddComponents/CarAddContainer";
import { RaceContainer } from "../../components/Body/RaceContainer";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <div id={styles.title}>
        <span>Resumo da Corrida</span>
      </div>
      <RaceContainer />
      <CarAddContainer />
    </div>
  );
};
