import { Section } from 'components/common/Section';
import css from './Location.module.css';

export const Location = () => {
    return (
        <Section id="location" className={css.locationSection}>
            <ul className={css.locationList}>
                <li className={css.locationItem}>
                    <p className={css.locationCafe}>CAFE</p>
                    <address className={css.locationAddress}>Chicago</address>
                    <ul className={css.locationWorkList}>
                        <li className={css.locationWorkItem}>
                            <p className={css.days}>Monday - Friday</p>
                            <p className={css.hours}>06:00 AM - 10:00 PM</p>
                        </li>
                        <li className={css.locationWorkItem}>
                            <p className={css.days}>Saturday - Sunday</p>
                            <p className={css.hours}>08:00 AM - 16:00 PM</p>
                        </li>
                    </ul>
                    <ul className={css.locationContactList}>
                        <li>
                            <a
                                href="tel:+610383766286"
                                className={css.locationContactLink}
                            >
                                +61(0) 383 766 286
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:noreply@envato.com"
                                className={css.locationContactLink}
                            >
                                noreply@envato.com
                            </a>
                        </li>
                    </ul>
                </li>
                <li className={css.locationItem}>
                    <p className={css.locationFoodTruck}>FOOD TRUCK</p>
                    <address className={css.locationAddress}>
                        Los Angeles
                    </address>
                    <ul className={css.locationWorkList}>
                        <li className={css.locationWorkItem}>
                            <p className={css.days}>Monday - Friday</p>
                            <p className={css.hours}>06:00 AM - 10:00 PM</p>
                        </li>
                        <li className={css.locationWorkItem}>
                            <p className={css.days}>Saturday - Sunday</p>
                            <p className={css.hours}>08:00 AM - 16:00 PM</p>
                        </li>
                    </ul>
                    <ul className={css.locationContactList}>
                        <li>
                            <a
                                href="tel:+610383766284"
                                className={css.locationContactLink}
                            >
                                +61(0) 383 766 284
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:noreply@envato.com"
                                className={css.locationContactLink}
                            >
                                noreply@envato.com
                            </a>
                        </li>
                    </ul>
                </li>
                <li className={css.locationItem}>
                    <p className={css.locationCafe}>CAFE</p>
                    <address className={css.locationAddress}>New York</address>
                    <ul className={css.locationWorkList}>
                        <li className={css.locationWorkItem}>
                            <p className={css.days}>Monday - Friday</p>
                            <p className={css.hours}>06:00 AM - 10:00 PM</p>
                        </li>
                        <li className={css.locationWorkItem}>
                            <p className={css.days}>Saturday - Sunday</p>
                            <p className={css.hours}>08:00 AM - 16:00 PM</p>
                        </li>
                    </ul>
                    <ul className={css.locationContactList}>
                        <li>
                            <a
                                href="tel:+610383766285"
                                className={css.locationContactLink}
                            >
                                +61(0) 383 766 285
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:noreply@envato.com"
                                className={css.locationContactLink}
                            >
                                noreply@envato.com
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </Section>
    );
};
