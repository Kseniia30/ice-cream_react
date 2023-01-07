import { Section } from 'components/common/Section';
import { FaTelegram } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { nanoid } from 'nanoid';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'components/common/Common.styled';
import {
    FeedBackBtnItem,
    FeedBackBtnList,
    FeedBackContentBox,
    FeedBackPhone,
    FeedBackPhoneLink,
    FeedbackSpan,
    FeedbackTitle,
    SocialItem,
    SocialLink,
    SocialList,
} from './styled/FeedBack.styled';

export const Feedback = ({ openModal }) => {
    const location = useLocation();
    return (
        <Section id="footer" style={{ background: '#FFF5F6' }}>
            <FeedBackBtnList>
                <FeedBackBtnItem key={nanoid()}>
                    <Button type="button" data-id="map" onClick={openModal}>
                        Our Location <IoIosArrowForward />
                    </Button>
                </FeedBackBtnItem>
                {location.pathname !== '/feedbacks' && (
                    <FeedBackBtnItem key={nanoid()}>
                        <Button type="button">
                            <Link to="/feedbacks" style={{ color: 'inherit' }}>
                                Feedbacks <IoIosArrowForward />
                            </Link>
                        </Button>
                    </FeedBackBtnItem>
                )}
            </FeedBackBtnList>
            <FeedBackContentBox>
                <FeedbackTitle>
                    homemade ice cream made
                    <br />
                    <FeedbackSpan>with passion</FeedbackSpan>
                </FeedbackTitle>
                <div>
                    <SocialList>
                        <SocialItem key={nanoid()}>
                            <SocialLink
                                href="https://web.telegram.org/k/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTelegram />
                            </SocialLink>
                        </SocialItem>
                        <SocialItem key={nanoid()}>
                            <SocialLink
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsFacebook />
                            </SocialLink>
                        </SocialItem>
                        <SocialItem key={nanoid()}>
                            <SocialLink
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiOutlineInstagram />
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                    <FeedBackPhone>
                        Feel free to contact
                        <FeedBackPhoneLink href="tel:+610383766284">
                            +61 (0) 383 766 284
                        </FeedBackPhoneLink>
                    </FeedBackPhone>
                </div>
            </FeedBackContentBox>
        </Section>
    );
};
