import { useCartContext } from "../component/Contexts/Cart.context";
import { useNavigate } from "react-router-dom";
import Styles from "./PanierPage.module.css";
import Button from "../component/Button/Button";
import style from "./Sammury.module.css";
import { Fragment } from "react";

const Sammury = () => {
  const { products, getCartTotalProduct } = useCartContext();
  let navigate = useNavigate();

  const { cleanCart } = useCartContext();

  const numeroDeCommande = JSON.parse(
    localStorage.getItem("number of commande")!
  );

  return (
    <main>
      <h2 className={`${Styles.pagePanier_title} ${style.Sammury_title}`}>
        Votre commande {numeroDeCommande} est en préparation
      </h2>
      <div className={Styles.container_Products}>
        {products.map((productCart) => (
          <div key={Number(productCart.id)} className={Styles.product_cart}>
            <div className={Styles.remove_productCart_position}>
              <img src={productCart.product.picture} alt="" />
              <p className={style.estimate}>Estimation de préparation: {productCart.product.estimate}</p>
            </div>
            <div>
              <div>
                <div className={Styles.remove_productCart}>
                  <h2 className={Styles.h2_panier}>
                    {productCart.product.title}{" "}
                    {productCart.product.filter === "vegetarien" && (
                      <img src="public/assets/img/vage-removebg-preview 3.png" />
                    )}
                  </h2>
                </div>
                <p className={Styles.p_panier}>{productCart.product.price}€</p>
                <div className={Styles.ingridient_selectQuantity}>
                  <div>
                    <div className={Styles.container_ingridients}>
                      <h3 className={Styles.h3}>inclus : </h3>
                      <p>
                        {productCart.product.includedAndExtraIngredients
                          .filter((ingridient) => ingridient.price === 0)
                          .map((ingridients) => (
                            <Fragment key={ingridients.id}>
                              {ingridients.title},
                            </Fragment>
                          ))}
                      </p>
                    </div>
                    <div className={Styles.container_ingridients}>
                      <h3 className={Styles.h3}>Plus de gourmandise:</h3>
                      <p>
                        {productCart.product.includedAndExtraIngredients
                          .filter((ingridient) => ingridient.price != 0)
                          .map((ingridients) => (
                            <Fragment key={ingridients.id}>
                              {ingridients.title}
                              {ingridients.price}€ ,
                            </Fragment>
                          ))}
                      </p>
                    </div>
                  </div>
                </div>
                <p>quantité :{productCart.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className={Styles.total_cart}>Total :{getCartTotalProduct()}€</p>
      <Button
        title="Nouvelle commande"
        callback={() => {
          navigate("/");
          cleanCart();
        }}
      />
    </main>
  );
};
export default Sammury;
