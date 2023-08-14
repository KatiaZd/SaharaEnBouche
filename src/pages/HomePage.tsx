import NavBar from "../component/navBar/NavBar";
import Footer from "../component/Footer/Footer";

import ProductsCategories from "../component/productCtegories/ProductsCategories";
import Filter from "../component/Filter/Filter";
import { useState } from "react";
import Styles from "./HomePage.module.css";

const HomePage = () => {
  const categories = ["entrées", "plats", "grillades", "desserts", "boissons"];
  const [filter, setData] = useState("");

  const FilterToHome = (filter: string) => {
    setData(filter);
  };

  return (
    <>
      <main>
        <NavBar tag={filter} />
        <Filter FilterToHome={FilterToHome} />
        {categories.map((cate) => (
          <div
            key={categories.indexOf(cate)}
            className={filter.length != 0 ? Styles.display_none : ""}
          >
            <ProductsCategories
              key={categories.indexOf(cate)}
              tag={filter}
              category={cate}
              id={cate}
            ></ProductsCategories>
          </div>
        ))}

        <ProductsCategories tag={filter}></ProductsCategories>
      </main>
      <Footer />
    </>
  );
};
export default HomePage;
