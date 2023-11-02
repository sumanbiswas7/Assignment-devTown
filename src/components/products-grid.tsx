import styles from "./products-grid.module.css";
import DUMMY_PRODUCTS from "../data/dummy-products.json";
import { Card } from "./card";
import { RoundButton } from "./styled/round-button";
import { useState } from "react";
import { Group, Radio } from "@mantine/core";

export function ProductsGrid() {
  const [products, setProducts] = useState(DUMMY_PRODUCTS);
  const [modal, setModal] = useState(false);
  const itemsPerPage = 6; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  function handleSortChange(type: string) {
    if (type === "name") {
      const sortedProducts = DUMMY_PRODUCTS.sort((a, b) => {
        const titleA = a.title.toUpperCase(); // Convert titles to uppercase for case-insensitive sorting
        const titleB = b.title.toUpperCase();

        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });

      setProducts(sortedProducts);
      setModal(false);
    }
    if (type === "desc") {
      const sortedProducts = DUMMY_PRODUCTS.sort((a, b) => {
        const descA = a.description.toUpperCase(); // Convert titles to uppercase for case-insensitive sorting
        const descB = b.description.toUpperCase();

        if (descA < descB) {
          return -1;
        }
        if (descA > descB) {
          return 1;
        }
        return 0;
      });

      setProducts(sortedProducts);
      setModal(false);
    }
    if (type === "price") {
      const sortedProducts = DUMMY_PRODUCTS.sort((a, b) => a.price - b.price);
      setProducts(sortedProducts);
      setModal(false);
    }
  }

  return (
    <div>
      {/* Browse Collection Text */}
      <div className={styles.browse_cont}>
        <p className={styles.browse_txt}>Browse from our collection</p>
        <RoundButton
          onClick={() => {
            window?.scrollTo({ top: 0 });
            setModal(!modal);
          }}
        >
          <img src="/filter-icon.svg" className={styles.filter_icon} />
        </RoundButton>
      </div>

      {/* Watches Grid */}
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

      {/* Pagination Buttons */}
      <div className={styles.pagination_btn_cont}>
        <RoundButton onClick={prevPage} disabled={currentPage === 1}>
          <img src="/caret-left.svg" />
        </RoundButton>
        <RoundButton onClick={nextPage} disabled={currentPage === totalPages}>
          <img src="/caret-right.svg" />
        </RoundButton>
      </div>

      {modal && <FilterModal />}
    </div>
  );

  function FilterModal() {
    return (
      <div>
        <div
          className={styles.modal_cont}
          onClick={() => setModal(!modal)}
        ></div>
        <div className={styles.modal_box}>
          <div className={styles.modal_left_box}>
            <h3>Sort By</h3>

            <Radio.Group onChange={handleSortChange}>
              <Group
                mt="xs"
                display={"flex"}
                style={{ flexDirection: "column" }}
                align="start"
              >
                <Radio value="name" label="Name" />
                <Radio value="price" label="Price" />
                <Radio value="desc" label="Description" />
              </Group>
            </Radio.Group>
          </div>
          <div className={styles.modal_right_box}>
            <h3>Filter By</h3>
          </div>
        </div>
      </div>
    );
  }
}
