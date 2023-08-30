import { useCartContext } from "../component/Contexts/Cart.context";
import Styles from "./PanierPage.module.css";
import SelectQuantityProduct from "../component/SelectQuantityProduct/SelectQuantityProduct";
import Button from "../component/Button/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Fragment } from "react";

const PanierPage = () => {
  const { products, getCartTotalProduct, removeProductInCart } =
    useCartContext();

  let navigate = useNavigate();

  return (
    <main className={Styles.main}>
      <Link className={Styles.retour_homePage} to={"/"}>
        Retour aux produits
      </Link>
      <h2 className={Styles.pagePanier_title}>Votre panier</h2>
      <div className={Styles.container_Products}>
        {products.map((productCart) => (
          <div key={Number(productCart.id)} className={Styles.product_cart}>
            <div className={Styles.remove_productCart_position}>
              <img
                onClick={() =>
                  removeProductInCart(
                    products,
                    productCart.product && productCart.product.id
                  )
                }
                className={Styles.icon_remove_productCart}
                src="./public/assets/icons/croix.png"
                alt=""
              />
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
                      <h3>inclus: </h3>
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
                      <h3>Plus de gourmandise:</h3>
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
                  <SelectQuantityProduct
                    product={productCart.product}
                    selectQuantityToProductComponent={() => {}}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className={Styles.total_cart}>Total :{getCartTotalProduct()}€</p>
      <Button
        title="Procéder au paiement"
        callback={() => navigate("/Payment")}
      />
    </main>
  );
};
export default PanierPage;
