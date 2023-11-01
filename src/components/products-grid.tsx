import styles from "./products-grid.module.css";
import DUMMY_PRODUCTS from "../data/dummy-products.json";
import { Card } from "./card";

export function ProductsGrid() {
  return (
    <div className={styles.grid_container}>
      {DUMMY_PRODUCTS.map((prod) => (
        <Card
          title={prod.title}
          description={prod.description}
          img={prod.img}
          price={prod.price}
          key={prod.id}
        />
      ))}
    </div>
  );
}
