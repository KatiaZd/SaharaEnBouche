import { useCartContext } from "../component/Contexts/Cart.context";
import { useNavigate } from "react-router-dom";
import Styles from "./PanierPage.module.css";
import Button from "../component/Button/Button";
import style from "./Sammury.module.css";

const Sammury = () => {
  const { products, getCartTotalProduct } = useCartContext();
  console.log("productCart===", products);
  let navigate = useNavigate();

  return (
    <main>
      <h2 className={`${Styles.pagePanier_title} ${style.Sammury_title}`}>
        Votre commande 12 est en préparation
      </h2>
      <div className={Styles.container_Products}>
        {products.map((productCart) => (
          <div className={Styles.product_cart}>
            <div className={Styles.remove_productCart_position}>
              <img src={productCart.product.picture} alt="" />
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
                            <>{ingridients.title},</>
                          ))}
                      </p>
                    </div>
                    <div className={Styles.container_ingridients}>
                      <h3 className={Styles.h3}>Plus de gourmandise:</h3>
                      <p>
                        {productCart.product.includedAndExtraIngredients
                          .filter((ingridient) => ingridient.price != 0)
                          .map((ingridients) => (
                            <>
                              {ingridients.title}
                              {ingridients.price}€ ,
                            </>
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
      <Button title="Nouvelle commande" callback={() => navigate("/")} />
    </main>
  );
};
export default Sammury;
