import { useEffect, useState } from "react";
import { IFilter } from "../../mocks/products.mock";
import Styles from "./Filter.module.css";

const Filter = ({ FilterToHome }) => {
  let [isActive, setActive] = useState(false);

  const filter: IFilter[] = [
    "agneau",
    "boeuf",
    "poulet",
    "vegetarien",
    "dessert",
    "boisson",
  ];
  const [filterCategorie, setFilterCategorie] = useState("");

  useEffect(() => {
    // Update the document title using the browser API
    filterCategorie;
  }, [filterCategorie]);

  FilterToHome(filterCategorie);

  return (
    <>
      <img
        src="public/assets/icons/reglages.png"
        alt=""
        className={Styles.img_filter}
        onClick={() =>
          setActive(isActive == false ? (isActive = true) : (isActive = false))
        }
      />
      <div className={isActive ? Styles.display_block : Styles.display_none}>
        <div className={Styles.filter_container}>
          {filter.map((categorie) => (
            <div key={filter.indexOf(categorie)} className={Styles.filter_name}>
              <p>{categorie}</p>
              <p
                className={
                  filterCategorie.includes(categorie)
                    ? Styles.bg_black
                    : Styles.bnt_filter
                }
                onClick={() => {
                  setFilterCategorie(filterCategorie + "," + categorie);
                }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Filter;
