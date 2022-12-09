import { Link } from 'react-router-dom';
import css from './FeedBack.module.css';
import scss from '../common/common.module.css';

export const FeedBacks = () => {
    const submitMessage = evt => {
        evt.preventDefault();
        console.log(evt.target.elements.name.value);
    };

    return (
        <div className={css.feedbacksBox}>
            <div className={scss.goBackDiv}>
                <button type="button" className={scss.goBackBtn}>
                    <Link to="/" className={scss.goBackLink}>
                        Go back
                    </Link>
                </button>
            </div>
            <div className={css.feedbackInfoBox}>
                <form onSubmit={submitMessage} className={css.form}>
                    <label className={css.label}>
                        Email
                        <input
                            type="email"
                            name="email"
                            className={css.input}
                        />
                    </label>
                    <label className={css.label}>
                        Name
                        <input type="text" name="name" className={css.input} />
                    </label>
                    <label className={css.label}>
                        Feedback
                        <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            className={css.textarea}
                        ></textarea>
                    </label>
                    <button type="sunmit" className={css.submitBtn}>
                        Send
                    </button>
                </form>
                <div className={css.contactsBox}>
                    <h2 className={css.contactTitle}>Contacts</h2>
                    <ul className={css.contactList}>
                        <li className={css.contactItem}>
                            <a
                                href="mailto:noreply@envato.com"
                                className={css.contactLink}
                            >
                                noreply@envato.com
                            </a>
                        </li>
                        <li className={css.contactItem}>
                            <a
                                href="tel:+610383766284"
                                className={css.contactLink}
                            >
                                +61 (0) 383 766 284
                            </a>
                        </li>
                        <li className={css.contactItem}>
                            <address className={css.address}>
                                125 W Mountain Ave,Fort Collins, CO 80524,
                                United States of America
                            </address>
                        </li>
                    </ul>
                </div>
                <img
                    src="http://pngimg.com/uploads/ice_cream/ice_cream_PNG5110.png"
                    alt="ice cream"
                    className={css.feedbackImg}
                />
            </div>
        </div>
    );
};
