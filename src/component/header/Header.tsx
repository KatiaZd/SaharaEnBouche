import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <a href="#">
          <img
            className={style.logo}
            src="assets/img/logoDestkop.png"
            alt="logo sahara en bouche"
          />
        </a>
        <a href="#">
          <img className={style.basket} src="assets/icons/basket.png" />
        </a>
      </div>
    </header>
  );
};
export default Header;
