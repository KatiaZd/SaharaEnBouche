import { Fragment } from "react";
import { useCartContext } from "../component/Contexts/Cart.context";
import Styles from "./PanierPage.module.css";
import SelectQuantityProduct from "../component/SelectQuantityProduct/SelectQuantityProduct";
import { useState } from "react";
const PanierPage = () => {
  const { products, getCartTotalProduct } = useCartContext();
  console.log("productCart===", products);
  //   const [selectQuantity, setData] = useState(0);

  //   const selectQuantityToProductComponent = (childdata: any) => {
  //     setData(childdata);
  //   };

  return (
    <main>
      {products.map((productCart) => (
        <div className={Styles.product_cart}>
          <div>
            <img src={productCart.product.picture} alt="" />
          </div>
          <div>
            <div>
              <h2>{productCart.product.title}</h2>
              <p>{productCart.product.price}€</p>
              <div className={Styles.ingridient_selectQuantity}>
                <div>
                  <div className={Styles.container_ingridients}>
                    <h3>inclus : </h3>
                    {productCart.product.includedAndExtraIngredients
                      .filter((ingridient) => ingridient.price === 0)
                      .map((ingridients) => (
                        <Fragment>
                          <p>{ingridients.title}, </p>
                        </Fragment>
                      ))}
                  </div>
                  <div className={Styles.container_ingridients}>
                    <h3>exstra :</h3>
                    {productCart.product.includedAndExtraIngredients
                      .filter((ingridient) => ingridient.price != 0)
                      .map((ingridients) => (
                        <>
                          <p>{ingridients.title}</p>
                          <p>{ingridients.price}€</p>
                        </>
                      ))}
                  </div>
                </div>
                {/* <SelectQuantityProduct
                  product={productCart.product}
                  selectQuantityToProductComponent={
                    selectQuantityToProductComponent
                  }
                /> */}
              </div>
            </div>
          </div>
        </div>
      ))}
      <p>Total :{getCartTotalProduct()}€</p>
    </main>
  );
};
export default PanierPage;
