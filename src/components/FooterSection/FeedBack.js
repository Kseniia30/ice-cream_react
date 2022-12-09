import { Section } from 'components/common/Section';
import { FaTelegram } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { nanoid } from 'nanoid';
import css from './FooterSection.module.css';
import { Link, useLocation } from 'react-router-dom';

export const Feedback = ({ openModal }) => {
    const location = useLocation();
    return (
        <Section id="footer">
            <ul className={css.feedbackList}>
                <li key={nanoid()} className={css.feedbackListItem}>
                    <button
                        type="button"
                        data-id="map"
                        onClick={openModal}
                        className={css.feedbackListBtn}
                    >
                        Our Location <IoIosArrowForward />
                    </button>
                </li>
                {location.pathname !== '/feedbacks' && (
                    <li key={nanoid()} className={css.feedbackListItem}>
                        <button type="button" className={css.feedbackListBtn}>
                            <Link to="/feedbacks" style={{ color: 'inherit' }}>
                                Feedbacks <IoIosArrowForward />
                            </Link>
                        </button>
                    </li>
                )}
            </ul>
            <div className={css.feedbackInfoDiv}>
                <h2 className={css.feedbackTitle}>
                    homemade ice cream made
                    <br />
                    <span className={css.feedbackTitleSpan}>with passion</span>
                </h2>
                <div>
                    <ul className={css.contactsSocialList}>
                        <li
                            key={nanoid()}
                            className={css.contactsSocialListItem}
                        >
                            <a
                                href="https://web.telegram.org/k/"
                                target="_blank"
                                rel="noreferrer"
                                className={css.contactsSocialLink}
                            >
                                <FaTelegram
                                    className={css.contactsSocialIcon}
                                />
                            </a>
                        </li>
                        <li
                            key={nanoid()}
                            className={css.contactsSocialListItem}
                        >
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                className={css.contactsSocialLink}
                            >
                                <BsFacebook
                                    className={css.contactsSocialIcon}
                                />
                            </a>
                        </li>
                        <li
                            key={nanoid()}
                            className={css.contactsSocialListItem}
                        >
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                className={css.contactsSocialLink}
                            >
                                <AiOutlineInstagram
                                    className={css.contactsSocialIcon}
                                />
                            </a>
                        </li>
                    </ul>
                    <p className={css.contactPhone}>
                        Feel free to contact
                        <a
                            href="tel:+610383766284"
                            className={css.contactPhoneLink}
                        >
                            +61 (0) 383 766 284
                        </a>
                    </p>
                </div>
            </div>
        </Section>
    );
};
