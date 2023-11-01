import styles from "./card.module.css";
import { Button } from "./styled/button";

export function Card({ description, img, price, title }: Props) {
  return (
    <div className={styles.container}>
      <img className={styles.cover_img} src={img} />
      <div className={styles.info_cont}>
        <h4 className={styles.info_title}>{title}</h4>
        <p className={styles.info_desc}>{description}</p>
        <div className={styles.buy_cont}>
          <Button>Order Now</Button>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
}

interface Props {
  img: string;
  title: string;
  description: string;
  price: number;
}
