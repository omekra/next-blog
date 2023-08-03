import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ text, url }) => {
  return (
    <div>
      <Link href={url}>
        <button className={styles.container}>{text}</button>
      </Link>
    </div>
  );
};
export default Button;
