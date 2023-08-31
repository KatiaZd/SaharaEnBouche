import React, {useState} from 'react';
import style from './Footer.module.css';
// import Cgv from '../CGV/Cgv';
import CgvOverlay from '../CgvOverlay/CgvOverlay';

const Footer: React.FC = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleCGVClick = () => {
        setShowOverlay(true)
    };

    const handleCloseOverlay = () => {
        setShowOverlay(false);
      };


    return (
        <footer className={style.footer}>
            <div className={style.containerImg}>
                <img className={style.imgFooter} src="/assets/img/footer.png" alt="Footer Le Sahara en Bouche" />
            </div>
            <button className={style.cgvButton} onClick={handleCGVClick}>
            CGV
            </button>

        
            {showOverlay && <CgvOverlay onClose={handleCloseOverlay} />}
        </footer>
    );
}

export default Footer;