import { useNavigate } from "react-router";
import Button from "../../component/Button/Button";
import style from "./NotFound.module.css";

const NotFound = () => {
  let navigate = useNavigate();
  return (
    <><div>

        <img
          className={style.imgNotFound}
          src="../../../public/assets/img/notFound.png"
          alt="Page 404"
        />
    </div>
    <main>
      <div className={style.divNotFound}>
        <p className={style.p_notFound}>
          Oops ! Vous êtes égaré dans les dunes numériques de notre application.
          <br />
          Rejoignez-nous au cœur du Sahara en Bouche en explorant nos plats
          exquis !
        </p>
         <div className={style.buttonHome}> 
          <Button  title="Retour à l'accueil" callback={() => navigate("/")} />
         </div> 
      </div>
    </main>
    </>
  );
};

export default NotFound;
