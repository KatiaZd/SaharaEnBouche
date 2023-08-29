import Button from "../../component/Button/Button";
import { useState} from "react";
import { useNavigate } from "react-router";
import style from "./FormPayment.module.css";
import { useForm } from "react-hook-form";

const FormPayment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues:{
            username: "",
            cardNumber: "",
            date: "",
            cryptogram: "", 
        }
    }
      
    );


  let navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);


  return (
    <>
      <form onSubmit={handleSubmit(()=>{

        setSubmitted(true);

        if (!submitted) {
          navigate("/");
        }
      })}className={style.formulaire}>

        <div className={style.column}>
          <label className={style.label}> Titulaire de la carte</label>
          <input
            className={style.input}
            type="text"
            {...register("username",{required:'Le nom du titulaire est requis'})}
          />
           <p className={style.error}>{errors.username?.message}</p> 
        </div>
        <div className={style.column}>
          <label className={style.label}> Numéro de la carte</label>
          <input
            className={style.input}
            type="number"
            {...register("cardNumber",{required:'Le numero de la carte est requis'})}
          />
          <p className={style.error} >{errors.cardNumber?.message}</p> 
        </div>
        <div className={style.column}>
          <label className={style.label}> Date de validité</label>
          <input
            className={style.input}
            type="date"
            {...register("date",{required:'La date de validation  est requise'})}
          />
          <p className={style.error} >{errors.date?.message}</p> 
        </div>
        <div className={style.column}>
          <label className={style.label}> Cryptogramme Visuel</label>
          <input
            className={style.input}
            type="number"
            {...register("cryptogram",{required:'Le cryptogramme est requis'})}
          />
          <p className={style.error} >{errors.cryptogram?.message}</p> 
        </div>

        <Button title="Valider le paiement" callback={() => {}} />
      </form>
    </>
  );
};
export default FormPayment;
