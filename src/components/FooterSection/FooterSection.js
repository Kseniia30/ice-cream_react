import { Feedback } from './FeedBack';
import { Footer } from './Footer';
import css from './FooterSection.module.css';

export const FooterSection = ({ openModal }) => {
    return (
        <div className={css.footerSection}>
            <Feedback openModal={openModal} />
            <Footer />
        </div>
    );
};
