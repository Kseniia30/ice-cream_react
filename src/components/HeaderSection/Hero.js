import { Section } from 'components/common/Section';
import { AiOutlineArrowRight } from 'react-icons/ai';
import css from './HeaderSection.module.css';

export const Hero = ({ openModal }) => {
    return (
        <Section id="hero" className={css.heroSection}>
            <div>
                <div className={css.heroTitleDiv}>
                    <h1 className={css.heroTitle}>
                        ice cream <br />
                        made with <br />
                        <span className={css.heroTitleSpan}>passion</span>
                    </h1>
                    <ul className={css.heroNavList}>
                        <li className={css.heroNavItem}>
                            <a href="#products" className={css.heroNavLink}>
                                Products
                            </a>
                        </li>
                        <li className={css.heroNavItem}>
                            <a href="#tradition" className={css.heroNavLink}>
                                How it’s made?
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={css.heroInnovationDiv}>
                    <img
                        src="http://pngimg.com/uploads/milk/milk_PNG98320.png"
                        alt="milk"
                        width="213"
                        height="274"
                    />
                    <div>
                        <p className={css.heroInnovationText}>
                            <b>All things ice – innovations in ice cream</b>
                            <br />
                            In response to popular demand, Food Processing
                            Technology looks at the very latest in ice cream
                            flavouring and manufacturing technology. Frances
                            Cook gets a taste of the flavours and trends
                            currently whetting appetites for ice cream lovers
                            and manufacturers alike.
                        </p>
                        <button
                            type="button"
                            onClick={openModal}
                            data-id="technologies"
                            className={css.heroInnovationBtn}
                        >
                            <AiOutlineArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className={css.shopsDiv}>
                <ul>
                    <li className={css.shopsItems}>
                        <h2 className={css.shopNumbers}>16</h2>
                        <p className={css.shops}>cafes</p>
                    </li>
                    <li className={css.shopsItems}>
                        <h2 className={css.shopNumbers}>23</h2>
                        <p className={css.shops}>food trucks</p>
                    </li>
                </ul>
                <img
                    src="http://pngimg.com/uploads/ice_cream/ice_cream_PNG20992.png"
                    alt="couple with ice cream"
                    width="304"
                    height="287"
                    className={css.heroIceImgSecond}
                />
            </div>
            <div className={css.circleDiv}></div>
            <img
                src="http://pngimg.com/uploads/ice_cream/ice_cream_PNG98155.png"
                alt="ice cream"
                width="236"
                height="519"
                className={css.heroIceImg}
            />
        </Section>
    );
};
