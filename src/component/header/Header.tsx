import { useCartContext } from "../../component/Contexts/Cart.context";
import style from "./Header.module.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
const Header = () => {
  let location = useLocation().pathname;

  const nav = ["entrées", "plats", "grillades", "desserts", "boissons"];
  const [click, setClick] = useState(false);

  const closeMenu = () => {
    if (click == true) {
      setClick(false);
    } else {
      setClick(true);
    }
  };  

  const [showLinks, setShowLinks] = useState(false);

  const handleShowlinks = () => {
    setShowLinks(!showLinks);
  };
  const { getQuantityTotal, products } = useCartContext();

  const [quantityProductInCart, setQuantityProductInCart] = useState(0);

  useEffect(() => {
    setQuantityProductInCart(getQuantityTotal());
  }, [products]);
  return (
    <header className={style.header}>
      <div
        className={`${style.container} ${style.navbar} ${
          showLinks ? style.show_nav : ""
        }`}
      >
        <button
          className={
            location != "/" ? style.burger_display_none : style.navbar_burger
          }
          onClick={() => {
            handleShowlinks();
            setClick(true);
          }}
        >
          <span className={style.burger_bar}></span>
        </button>
        <NavLink to="/">
          <img
            className={style.logo}
            src="/assets/img/logoDestkop.png"
            alt="logo sahara en bouche"
          />
        </NavLink>
        <NavLink to="/panier" className={style.linkBasket}>
          <img className={style.basket} src="/assets/icons/basket.png" />
          <p className={style.quantity_ProductCart}>{quantityProductInCart}</p>
        </NavLink>
      </div>
      <div
        className={`${
          showLinks === false || click == false
            ? style.display_none
            : style.display_block
        } ${style.display_none} ${style.padding_bottom}`}
      >
        <ul
          className={
            showLinks === false ? style.display_none : style.navbar_links
          }
        >
          <li className={style.navbar_item}>
            <a href="/" className={style.navbar_link}>
              TOUT
            </a>
          </li>

          {nav.map((link) => (
            <li key={nav.indexOf(link)}>
              <Link
                to={link}
                spy={true}
                smooth={true}
                offset={-110}
                duration={2000}
                // onClick={closeMenu}
                onClick={() => {
                  closeMenu;
                  setShowLinks(false);
                }}
                className={style.navbar_link}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Header;
