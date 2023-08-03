import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="About"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            sapiente totam explicabo nisi natus ipsum sed voluptate incidunt
            nihil omnis, provident accusantium libero reprehenderit laboriosam?
            Adipisci officia eum alias rem.
          </p>
        </div>
        <div className={styles.item}>
          <h1>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            sapiente totam explicabo nisi natus ipsum sed voluptate incidunt
            nihil omnis, provident accusantium libero reprehenderit laboriosam?
            Adipisci officia eum alias rem.
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};
export default About;
