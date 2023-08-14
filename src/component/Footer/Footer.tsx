import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.containerImg}>
                <img className={style.imgFooter} src="/assets/img/footer.png" alt="Footer Le Sahara en Bouche" />
            </div>
            <a className={style.cgv} href="#">CGV</a>
        </footer>
    );
}

export default Footer;