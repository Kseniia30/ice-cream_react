import { Section } from 'components/common/Section';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import css from './Products.module.css';
import scss from '../common/common.module.css';

export const Products = () => {
    return (
        <Section id="products" className={css.productsSection}>
            <h3 className={scss.littleTitle}>100% natural</h3>
            <h2 className={scss.title}>products</h2>
            <ul className={css.productsList}>
                <li className={css.productsItemFirst}>
                    <h3 className={css.productsItemTitle}>Ice cream</h3>
                    <p className={css.productsItemText}>
                        Ice cream is a sweetened frozen food typically eaten as
                        a snack or dessert. It may be made from milk or cream
                        and is flavoured with a sweetener, either sugar or an
                        alternative, and a spice, such as cocoa or vanilla, or
                        with fruit such as strawberries or peaches.
                    </p>
                    <Link to="/icecream" className={css.productsItemLink}>
                        <AiOutlineArrowRight />
                    </Link>
                </li>
                <li className={css.productsItemSecond}>
                    <h3 className={css.productsItemTitle}>Coffee</h3>
                    <p className={css.productsItemText}>
                        Coffee is a drink prepared from roasted coffee beans.
                        Darkly colored, bitter, and slightly acidic, coffee has
                        a stimulating effect on humans, primarily due to its
                        caffeine content. It is the most popular hot drink in
                        the world.
                    </p>
                    <Link to="/coffee" className={css.productsItemLink}>
                        <AiOutlineArrowRight />
                    </Link>
                </li>
                <li className={css.productsItemThird}>
                    <h3 className={css.productsItemTitle}>Milkshakes</h3>
                    <p className={css.productsItemText}>
                        A milkshake (sometimes simply called a shake) is a sweet
                        beverage made by blending milk, ice cream, and
                        flavorings or sweeteners.
                    </p>
                    <Link to="/milkshakes" className={css.productsItemLink}>
                        <AiOutlineArrowRight />
                    </Link>
                </li>
            </ul>
        </Section>
    );
};
