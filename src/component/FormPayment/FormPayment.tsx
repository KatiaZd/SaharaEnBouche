import Button from "../../component/Button/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import style from "./FormPayment.module.css";
import { useForm } from "react-hook-form";

const FormPayment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      cardNumber: "",
      date: "",
      cryptogram: "",
    },
  });

  let navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const [counter, setCounter] = useState<number>(
    localStorage.getItem("number of commande")
      ? JSON.parse(localStorage.getItem("number of commande") as string)
      : []
  );

  useEffect(() => {
    localStorage.setItem("number of commande", JSON.stringify(counter));
  }, [counter]);

  useEffect(() => {
    const numberOfCommande = JSON.parse(
      localStorage.getItem("number of commande")!
    );
    if (numberOfCommande) {
      setCounter(numberOfCommande);
    }
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit(() => {
          setSubmitted(true);

          if (!submitted) {
            navigate("/Sammury");
          }
        })}
        className={style.formulaire}
      >
        <div className={style.column}>
          <label className={style.label}> Titulaire de la carte</label>
          <input
            className={style.input}
            type="text"
            {...register("username", {
              required: "Le nom du titulaire est requis",
            })}
          />
          {errors.username && (
            <p className={style.error}>Le nom du titulaire est requis</p>
          )}
        </div>
        <div className={style.column}>
          <label className={style.label}> Numéro de la carte</label>
          <input
            className={style.input}
            type="number"
            {...register("cardNumber", {
              required: "Le numero de la carte est requis",
              minLength: {
                value: 16,
                message:
                  "Le numero de carte comporte 16 chiffres obligatoirement",
              },
              maxLength: {
                value: 16,
                message:
                  "Le numero de carte comporte 16 chiffres obligatoirement",
              },
            })}
          />
          <p className={style.error}>{errors.cardNumber?.message}</p>
        </div>
        <div className={style.column}>
          <label className={style.label}> Date de validité</label>
          <input
            className={style.input}
            type="date"
            {...register("date", {
              required: "La date de validation  est requise",
            })}
          />
          <p className={style.error}>{errors.date?.message}</p>
        </div>
        <div className={style.column}>
          <label className={style.label}> Cryptogramme Visuel</label>
          <input
            className={style.input}
            type="number"
            {...register("cryptogram", {
              required: " Le cryptogramme est requis",
              minLength: {
                value: 3,
                message:
                  "Le cryptogramme  trop court  3 chiffres obligatoirement",
              },
              maxLength: {
                value: 3,
                message: "Le cryptogramme comporte 3 chiffres obligatoirement",
              },
            })}
          />
          <p className={style.error}>{errors.cryptogram?.message}</p>
        </div>

        <Button
          title="Valider le paiement"
          callback={() => {
            setCounter(Number(counter) + 1);
          }}
        />
      </form>
    </>
  );
};
export default FormPayment;
