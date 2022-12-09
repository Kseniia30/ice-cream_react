import css from './FooterSection.module.css';

export const Footer = () => {
    return (
        <footer className={css.footer}>
            <p className={css.footerText}>
                © 2019 - IceCream. All Rights Reserved
            </p>
        </footer>
    );
};
