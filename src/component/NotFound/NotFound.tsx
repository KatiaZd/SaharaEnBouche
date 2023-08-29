import style from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={style.div}>
      <img
        className={style.imgNotFound}
        src="../../../public/assets/img/notFound.png"
        alt="Page 404"
      />
      <p className={style.p_notFound}>
        Oops ! Vous êtes égaré dans les dunes numériques de notre application.
        <br />
        Rejoignez-nous au cœur du Sahara en Bouche en explorant nos plats exquis
        !
      </p>
    </div>
  );
};

export default NotFound;
