import styles from "./App.module.css";
import { NavBar } from "./components/navbar";
import { Button } from "./components/styled/button";
import { FilterButton } from "./components/styled/filter-button";

function App() {
  function handleFilter() {}

  return (
    <div>
      <NavBar />

      <main className={styles.main_cont}>
        {/* Rolex Celleni */}
        <div className={styles.hero_container}>
          <div className={styles.text_cont}>
            <h2 className={styles.title}>Rolex Cellini</h2>
            <p className={styles.desc}>
              Exquisite timepiece exemplifies Rolex's dedication to precision
              and luxury, making it a must-have for those with a refined taste
              in watches.
            </p>
            <div className={styles.order_price_cont}>
              <Button>Order Now</Button>
              <p className={styles.price}>$8,999</p>
            </div>
          </div>
          <img src="/hero-product.webp" className={styles.hero_prod_img} />
        </div>
        {/* Browse Collection Text */}
        <div className={styles.browse_cont}>
          <p className={styles.browse_txt}>Browse from our collection</p>
          <FilterButton onClick={handleFilter}>
            <img src="/filter-icon.svg" className={styles.filter_icon} />
          </FilterButton>
        </div>
      </main>
    </div>
  );
}

export default App;
