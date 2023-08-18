import React from 'react';
import ReactDOM from 'react-dom';
import style from './CgvOverlay.module.css';
import Cgv from '../CGV/Cgv';

interface CgvOverlayProps {
    onClose: () => void;
}

const CgvOverlay: React.FC<CgvOverlayProps> = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className={style.overlay}>
      <div className={style.overlayContent}>
        <button className={style.closeButton} onClick={onClose}>
          Fermer
        </button>
        <Cgv />
      </div>
    </div>,
    document.body
  );
};

export default CgvOverlay;
