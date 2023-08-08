/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Lamania | Contact",
  description: "Next Blog | Contact",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            fill={true}
            alt="Contact"
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea
            cols="30"
            rows="10"
            className={styles.textArea}
            placeholder="message"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};
export default Contact;
