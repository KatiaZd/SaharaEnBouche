import FormPayment from "../component/FormPayment/FormPayment";
import BackButton from "../component/BackButton/BackButton";
import style from "./Payment.module.css"

const Payment =()=>{
return(
    <main>
    <BackButton />
    <h2 className={style.titlePaiement}>Paiement de votre commande</h2>
    <p className={style.totalPrice}>Total: 30 €</p>
  
    <div className={`${style.container} ${style.hide}`}>
        <div className={style.paiement}>
            <img className={style.imgPaiement} src="../../../public/assets/icons/creditCard.png" alt="Paiement par CB" />
            <p>Paiement par CB</p>
        </div>
        <div className={style.paiement}>
            <img className={style.imgPaiement} src="../../../public/assets/icons/especes.png" alt="Paiement en espèces" />
            <p>Paiement par CB</p>
        </div>
    </div>
    <div className={style.formPaiement}>
        <FormPayment/>
    </div>
    </main>
)
};
 export default Payment;