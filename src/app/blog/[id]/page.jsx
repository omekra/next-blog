import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            blanditiis debitis reprehenderit temporibus dolorum nesciunt error
            est facere optio. Nulla, explicabo! Eum qui explicabo maxime. Autem
            harum eligendi saepe natus?
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate
          nobis numquam soluta sint a asperiores quaerat obcaecati sapiente!
          Magnam tempore reprehenderit sint dolorum. A eum molestiae iusto,
          velit autem dolorum vel ipsam, maxime quo ab, numquam placeat ex
          expedita?
        </p>
      </div>
    </div>
  );
};
export default BlogPost;
