import styles from "./products-grid.module.css";
import DUMMY_PRODUCTS from "../data/dummy-products.json";
import { Card } from "./card";
import { RoundButton } from "./styled/round-button";
import { useState } from "react";

export function ProductsGrid() {
  const itemsPerPage = 6; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = DUMMY_PRODUCTS.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(DUMMY_PRODUCTS.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className={styles.grid_container}>
        {currentItems.map((prod) => (
          <Card
            title={prod.title}
            description={prod.description}
            img={prod.img}
            price={prod.price}
            key={prod.id}
          />
        ))}
      </div>
      <div className={styles.pagination_btn_cont}>
        <RoundButton onClick={prevPage} disabled={currentPage === 1}>
          <img src="/caret-left.svg" />
        </RoundButton>
        <RoundButton onClick={nextPage} disabled={currentPage === totalPages}>
          <img src="/caret-right.svg" />
        </RoundButton>
      </div>
    </div>
  );
}
