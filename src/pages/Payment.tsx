import FormPayment from "../component/FormPayment/FormPayment";
import BackButton from "../component/BackButton/BackButton";
import style from "./Payment.module.css";
import { useCartContext } from "../component/Contexts/Cart.context";

const Payment = () => {
  const { getCartTotalProduct } = useCartContext();
  return (
    <main>
      <BackButton />
      <h2 className={style.titlePaiement}>Paiement de votre commande</h2>
      <p className={style.totalPrice}>Total: {getCartTotalProduct()} €</p>

      <div className={`${style.container} ${style.hide}`}>
        <div className={style.paiement}>
          <img
            className={style.imgPaiement}
            src="../../../public/assets/icons/creditCard.png"
            alt="Paiement par CB"
          />
          <p>Paiement par CB</p>
        </div>
        <div className={style.paiement}>
          <img
            className={style.imgPaiement}
            src="../../../public/assets/icons/especes.png"
            alt="Paiement en espèces"
          />
          <p>Paiement par CB</p>
        </div>
      </div>
      <div className={style.formPaiement}>
        <FormPayment />
      </div>
    </main>
  );
};
export default Payment;
