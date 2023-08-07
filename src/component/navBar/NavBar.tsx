import { Link } from "react-scroll";
import { useState } from "react";
import Styles from "./NavBar.module.css";
const NavBar = () => {
  const nav = ["entrées", "plats", "grillades", "desserts", "boissons"];
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  return (
    <nav className={Styles.nav}>
      <ul>
        <li>
          <Link to="/" spy={true} smooth={true} offset={-150} duration={2000}>
            tout
          </Link>
        </li>
        {nav.map((link) => (
          <li>
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
