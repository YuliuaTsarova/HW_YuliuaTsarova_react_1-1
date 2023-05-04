import './App.module.css';
import styles from './App.module.css'
import { Title } from "../Title/Title";
import { Description } from "../Description/Description";
import { Cards } from "../Cards/Cards";

export const App = () => {
  return (
    <div className={styles.site}>
  <main className={styles.main}>
    <section className={styles.section}>
        <div className={styles.container}>
        <div className={styles.wrapper}>
        <Title />
        <Description />
        <Cards />
        </div>
      </div>
    </section>
  </main>
</div>
  );
}

export default App;
