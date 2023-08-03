import styles from "./footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <div>©{year} Lamania. All rights reserved.</div>
      <div></div>
    </div>
  );
};
export default Footer;
