import Button from "../../component/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router";
import style from "./FormPayment.module.css";
const FormPayment = () => {
  const [formData, setFormData] = useState({
    username: "",
    cardNumber: "",
    date: "",
    cryptogram: "",
  });
  let navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    if (submitted) {
      console.log("redirige moi");
      navigate("/Summary");
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div className={style.column}>
          <label> Titulaire de la carte</label>
          <input
            className={style.input}
            type="text"
            value={formData.username}
            onChange={handleInputChange}
            name="username"
          />
        </div>
        <div className={style.column}>
          <label> Numéro de la carte</label>
          <input
            className={style.input}
            type="number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.column}>
          <label> Date de validité</label>
          <input
            className={style.input}
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.column}>
          <label> Cryptogramme Visuel</label>
          <input
            className={style.input}
            type="number"
            name="cryptogram"
            value={formData.cryptogram}
            onChange={handleInputChange}
          />
        </div>

        <Button title="Valider le paiement" callback={() => {}} />
      </form>
    </main>
  );
};
export default FormPayment;
