import { useNavigate } from "react-router-dom";
import style from "./BackButton.module.css";




const BackButton =()=>{
    const navigate= useNavigate();
    const goback =()=> {navigate(-1);}
    return (
        
         <img src="/assets/icons/fleche.png" alt="bouton de retour" className={style.img} onClick={goback}/>
    )
}
export default BackButton;