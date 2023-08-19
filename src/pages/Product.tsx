import Button from "../component/Button/Button";
import BackButton from "../component/BackButton/BackButton";
import SelectQuantityProduct from "../component/SelectQuantityProduct/SelectQuantityProduct";
import style from "./Product.module.css";
import ProductDetail from "../component/ProductDetail/ProductDtail";

const Product = () => {
  const addProduct = () => {
    console.log("ajouter un produit");
  };

  return (
    <>
      <main>
        <BackButton />
        <ProductDetail />

        <div className={style.containerButton}>
          <SelectQuantityProduct />
          <Button title="Ajouter au panier" callback={addProduct} />
        </div>
      </main>
    </>
  );
};
export default Product;
