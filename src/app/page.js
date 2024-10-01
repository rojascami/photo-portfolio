import styles from "./page.module.css";
import Landing from "@/components/Landing/Landing";
import Landscapes from './landscapes/page';
import Sports from './sports/page';
import Contact from './contact/page'
export default function Home() {
  return (
    <div className={styles.page}>
        <Landing />
        <Landscapes />
        <Sports />
        <Contact />
    </div>
  );
}
