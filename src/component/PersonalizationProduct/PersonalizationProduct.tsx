import { IProduct } from "mocks/products.mock";
import Styles from "./PersonalizationProduct.module.css";

interface IIngridients {
  product: IProduct;
}
const PersonalizationProduct = (props: IIngridients) => {
  const { product } = props;
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

  return (
    <>
      {" "}
      <div>
        <h3>Inclus</h3>
        {includeIngridients().map((Ingredient: any) => (
          <>
            <div className={Styles.ingridients_container}>
              <p>{Ingredient.title}</p>
              <p className={Styles.bnt_ingridient}></p>
            </div>
            <hr />
          </>
        ))}

        <h3>Plus de gourmandise ?</h3>
        {extraIngridients().map((Ingredient: any) => (
          <>
            <div className={Styles.ingridients_container}>
              <p>
                {Ingredient.title} {Ingredient.price}€
              </p>
              <p className={Styles.bnt_ingridient}></p>
            </div>
            <hr />
          </>
        ))}
        <p className={Styles.total_price_product}>Total : 8€</p>
      </div>
    </>
  );
};
export default PersonalizationProduct;
