import { IProduct } from "mocks/products.mock";
import Styles from "./PersonalizationProduct.module.css";
import { Fragment, useEffect, useState } from "react";

interface IIngridients {
  product: IProduct;
  PersonalizationProductToProductDetail: (
    productPersonaliser: IProduct
  ) => void;
}
const PersonalizationProduct = (props: IIngridients) => {
  const { product, PersonalizationProductToProductDetail } = props;

  const includeIngridients = () => {
    const includeIngridient = product.includedAndExtraIngredients.filter(
      (ingridient) => ingridient.price === 0
    );
    return includeIngridient;
  };

  const extraIngridients = () => {
    const extraIngridient = product.includedAndExtraIngredients.filter(
      (ingridient) => ingridient.price != 0
    );
    return extraIngridient;
  };
  var productPersonaliser = Object.assign({}, product);
  const PersonalizationProduct = (
    ingridient: any,
    productPersonaliser: IProduct
  ) => {
    productPersonaliser.includedAndExtraIngredients =
      product.includedAndExtraIngredients.filter(
        (ele) => !ingridient.includes(ele.title)
      );

    return productPersonaliser;
  };

  const [filterincludIngridients, setfilterincludIngridients] = useState("");
  const totalPrice = () => {
    var price = productPersonaliser.price;
    productPersonaliser.includedAndExtraIngredients.forEach(
      (element) => (price = price + element.price)
    );
    return price;
  };
  const [total, setTotal] = useState(totalPrice());

  useEffect(() => {
    filterincludIngridients;

    if (filterincludIngridients != "") {
      var test = filterincludIngridients.split(",");
      let myIndex = test.indexOf("");
      test.splice(myIndex, 1);
      PersonalizationProduct(test, productPersonaliser);
      PersonalizationProductToProductDetail(productPersonaliser);
      setTotal(totalPrice());
    }
  }, [filterincludIngridients]);

  return (
    <>
      <div>
        <h3>Inclus</h3>
        {includeIngridients().map((Ingredient: any, index) => (
          <Fragment key={index}>
            <div className={Styles.ingridients_container}>
              <p>{Ingredient.title}</p>
              <p
                onClick={() => {
                  setfilterincludIngridients(
                    filterincludIngridients + "," + Ingredient.title
                  );
                }}
                className={
                  filterincludIngridients.includes(Ingredient.title)
                    ? `${Styles.bnt_ingridient} `
                    : `${Styles.bnt_ingridient} ${Styles.bg_color}`
                }
              ></p>
            </div>
            <hr />
          </Fragment>
        ))}

        <h3>Plus de gourmandise ?</h3>
        {extraIngridients().map((Ingredient: any, index) => (
          <Fragment key={index}>
            <div className={Styles.ingridients_container}>
              <p>
                {Ingredient.title} {Ingredient.price}€
              </p>
              <p
                onClick={() => {
                  setfilterincludIngridients(
                    filterincludIngridients + "," + Ingredient.title
                  );
                }}
                className={
                  filterincludIngridients.includes(Ingredient.title)
                    ? `${Styles.bnt_ingridient} `
                    : `${Styles.bnt_ingridient} ${Styles.bg_color}`
                }
              ></p>
            </div>
            <hr />
          </Fragment>
        ))}
        <p className={Styles.total_price_product}>Total :{total}€</p>
      </div>
    </>
  );
};
export default PersonalizationProduct;
