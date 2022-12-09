import { Suspense } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import scss from '../components/common/common.module.css';
import css from './css/Coffee.module.css';

const Coffee = () => {
    return (
        <>
            <div className={scss.goBackDiv}>
                <button type="button" className={scss.goBackBtn}>
                    <Link to="/" className={scss.goBackLink}>
                        Go back
                    </Link>
                </button>
            </div>
            <h2 className={scss.title}>Coffee</h2>
            <div className={css.coffeeMainBox}>
                <div className={css.coffeeMainTextBox}>
                    <p className={css.coffeeMainText}>
                        Coffee is a drink prepared from roasted coffee beans.
                        Darkly colored, bitter, and slightly acidic, coffee has
                        a stimulating effect on humans, primarily due to its
                        caffeine content. It is the most popular hot drink in
                        the world.
                    </p>
                    <p className={css.coffeeMainText}>
                        Seeds of the Coffea plant's fruits are separated to
                        produce unroasted green coffee beans. The beans are
                        roasted and then ground into fine particles that are
                        typically steeped in hot water before being filtered
                        out, producing a cup of coffee. It is usually served
                        hot, although chilled or iced coffee is common. Coffee
                        can be prepared and presented in a variety of ways
                        (e.g., espresso, French press, caffè latte, or
                        already-brewed canned coffee). Sugar, sugar substitutes,
                        milk, and cream are often used to mask the bitter taste
                        or enhance the flavor.
                    </p>
                    <p className={css.coffeeMainText}>
                        Though coffee is now a global commodity, it has a long
                        history tied closely to food traditions around the Red
                        Sea. The earliest credible evidence of coffee drinking
                        in the form of the modern beverage appears in modern-day
                        Yemen from the mid-15th century in Sufi shrines, where
                        coffee seeds were first roasted and brewed in a manner
                        similar to current methods. The Yemenis procured the
                        coffee beans from the Ethiopian Highlands via coastal
                        Somali intermediaries and began cultivation. By the 16th
                        century, the drink had reached the rest of the Middle
                        East and North Africa, later spreading to Europe. In the
                        20th century, coffee became a global commodity, creating
                        different coffee cultures around the world.
                    </p>
                    <p className={css.coffeeMainText}>
                        The two most commonly grown coffee bean types are C.
                        arabica and C. robusta. Coffee plants are cultivated in
                        over 70 countries, primarily in the equatorial regions
                        of the Americas, Southeast Asia, the Indian
                        subcontinent, and Africa. As of 2018, Brazil was the
                        leading grower of coffee beans, producing 35% of the
                        world's total. Green, unroasted coffee is the most
                        traded agricultural commodity and one of the most traded
                        commodities overall, second only to petroleum. Despite
                        sales of coffee reaching billions of dollars worldwide,
                        farmers producing coffee beans disproportionately live
                        in poverty. Critics of the coffee industry have also
                        pointed to its negative impact on the environment and
                        the clearing of land for coffee-growing and water use.
                    </p>
                    <ul className={css.coffeeTypeList}>
                        <li className={css.coffeeeTypeItem}>
                            <NavLink
                                to="/coffee/hot"
                                className={css.coffeeTypeLink}
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                              color: '#FFB8CA',
                                              background: '#D41443',
                                          }
                                        : {
                                              color: '#fff',
                                              background: '#FFB8CA',
                                          }
                                }
                            >
                                Hot coffee
                            </NavLink>
                        </li>
                        <li className={css.coffeeeTypeItem}>
                            <NavLink
                                to="/coffee/ice"
                                className={css.coffeeTypeLink}
                                style={({ isActive }) =>
                                    isActive
                                        ? {
                                              color: '#FFB8CA',
                                              background: '#D41443',
                                          }
                                        : {
                                              color: '#fff',
                                              background: '#FFB8CA',
                                          }
                                }
                            >
                                Ice coffee
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <img
                    src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="coffee"
                    className={css.coffeeMainImg}
                />
            </div>

            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </>
    );
};
export default Coffee;
