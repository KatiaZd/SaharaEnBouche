import { Link } from "react-scroll";
import { useState } from "react";
import Styles from "./NavBar.module.css";

interface IFilter {
  tag: string;
}
const NavBar = (props: IFilter) => {
  const { tag } = props;

  const nav = ["entrées", "plats", "grillades", "desserts", "boissons"];
  const [click, setClick] = useState(false);

  const closeMenu = () => setClick(false);
  return (
    <nav className={tag.length != 0 ? Styles.display_none : Styles.nav}>
      <ul>
        <li>
          <Link to="/" spy={true} smooth={true} offset={-150} duration={2000}>
            tout
          </Link>
        </li>
        {nav.map((link) => (
          <li key={nav.indexOf(link)}>
            <Link
              to={link}
              spy={true}
              smooth={true}
              offset={-50}
              duration={2000}
              onClick={closeMenu}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
