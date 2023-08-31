import { Link } from "react-router-dom";

interface IProductCard {
  title: string;
  img: string;
  price: number;
  filter: string;
  identifiantProduct?: number;
}

import Styles from "./ProductCard.module.css";

const ProductCard = (props: IProductCard) => {
  const { title, img, price, filter, identifiantProduct } = props;

  return (
    <div className={Styles.product_container}>
      <Link to={`/Product/${identifiantProduct}`}>
        <img src={img} className={Styles.product_img} />
      </Link>
      <div className={Styles.proprety_product}>
        <p className={Styles.product_title}>
          {title}
          {filter === "vegetarien" && (
            <img src="public/assets/img/vage-removebg-preview 3.png" />
          )}
        </p>
        <p>{price}€</p>
      </div>
    </div>
  );
};
export default ProductCard;
