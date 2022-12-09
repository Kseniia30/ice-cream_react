import css from './HeaderSection.module.css';

export const Header = () => {
    return (
        <header className={css.header}>
            <ul className={css.headerList}>
                <li className={css.headerListItem}>
                    <a href="#hero" className={css.headerListLink}>
                        Home
                    </a>
                </li>
                <li className={css.headerListItem}>
                    <a href="#products" className={css.headerListLink}>
                        Products
                    </a>
                </li>
                <li className={css.headerListItem}>
                    <a href="#tradition" className={css.headerListLink}>
                        Tradition and Love
                    </a>
                </li>
                <li className={css.headerListItem}>
                    <a href="#location" className={css.headerListLink}>
                        Location
                    </a>
                </li>
                <li className={css.headerListItem}>
                    <a href="#footer" className={css.headerListLink}>
                        Feedback
                    </a>
                </li>
            </ul>
        </header>
    );
};
