import Button from "../component/Button/Button";
import BackButton from "../component/BackButton/BackButton";
import SelectQuantityProduct from "../component/SelectQuantityProduct/SelectQuantityProduct";
import style from './Product.module.css';
const Product = () => {
  const addProduct = () => {
    console.log("ajouter un produit");
  };

  return (
    <>
      <BackButton />
      <h1>Page product </h1>
      <div className={style.containerButton}>
        <SelectQuantityProduct />
        <Button title="Ajouter au panier" callback={addProduct} />
      </div>
    </>
  );
};
export default Product;
