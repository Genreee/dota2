import { Analytics } from "@vercel/analytics/next";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <img src="dota.jpg" alt="" />
      <a href="https://apkvision.org/games/strategy/dota-2-135110/download/v1.1-apk/" className={styles.button}>
       Download Dota 2 Mobile Apk
      </a>
    </div>
  );
}
