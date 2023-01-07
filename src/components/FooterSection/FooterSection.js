import { Feedback } from './FeedBack';
import { Footer } from './Footer';
import { FooterSectionBox } from './styled/FooterSection.styled';

export const FooterSection = ({ openModal }) => {
    return (
        <FooterSectionBox>
            <Feedback openModal={openModal} />
            <Footer />
        </FooterSectionBox>
    );
};
