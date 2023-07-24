interface IProductCard {
  title: string;
  img: string;
  price: number;
  filter: string;
}

import Styles from "./ProductCard.module.css";

const ProductCard = (props: IProductCard) => {
  const { title, img, price, filter } = props;
  return (
    <div className={Styles.product_container}>
      <img src={img} className={Styles.product_img} />
      <div className={Styles.proprety_product}>
        <p className={Styles.product_title}>
          {title}
          {filter === "vegetarien" && (
            <img src="public/assets/img/vage-removebg-preview 3.png" />
          )}
        </p>
        <p>{price}</p>
      </div>
    </div>
    // <div>
    //   <img src="src\assets\img\entrees\bricksViande.png" />
    //   <div>
    //     <p>Bricks à la viande</p>
    //     <p>5€</p>
    //   </div>
    // </div>
  );
};
export default ProductCard;
