import style from "./Header.module.css";
import { useState } from "react";
const Header = () => {
  // descructuration pour savoir si c'est ouvert ou fermer
  const [showLinks, setShowLinks] = useState(false);
  const handleShowlinks = () => {
    // si on est a true on active le burger
    setShowLinks(!showLinks);
    console.log("showLinks",showLinks);
  };
  return (
    <header className={style.header}>
      {/* faire une condition quand showLinks est a true la class show nav se met en place */}
      {/* <div className={`${style.container} ${style.navbar} ${style.show_nav}`}> */}
      <div className={`${style.container} ${style.navbar} ${showLinks?style.show_nav:""}`}>
        <a href="#">
          <img
            className={style.logo}
            src="assets/img/logoDestkop.png"
            alt="logo sahara en bouche"
          />
        </a>
        <a href="#" className="linkBasket">
          <img className={style.basket} src="assets/icons/basket.png" />
        </a>
        <nav className={style.nav}>
          <ul className={`${style.navbar_links} ${style.ul}`}>
            <li className={style.navbar_item}>
              <a href="/" className={style.navbar_link}>
                TOUT
              </a>
            </li>
            <li className={style.navbar_item}>
              <a href="/" className={style.navbar_link}>
                ENTREES
              </a>
            </li>
            <li className={style.navbar_item}>
              <a href="/" className={style.navbar_link}>
                PLATS
              </a>
            </li>
            <li className={style.navbar_item}>
              <a href="/" className={style.navbar_link}>
                GRILLADES
              </a>
            </li>
            <li className={style.navbar_item}>
              <a href="/" className={style.navbar_link}>
                DESSERTS
              </a>
            </li>
            <li className={style.navbar_item}>
              <a href="/" className={style.navbar_link}>
                BOISSONS
              </a>
            </li>
          </ul>
          <button className={style.navbar_burger} onClick={()=>handleShowlinks()}>
            <span className={style.burger_bar}></span>
          </button>
        </nav>
      </div>
    </header>
  );
};
export default Header;
