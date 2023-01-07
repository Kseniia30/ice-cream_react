import {
    Button,
    Container,
    GoBackDiv,
    GoBackLink,
    Title,
} from 'components/common/Common.styled';
import {
    ContactAddress,
    ContactBox,
    ContactLink,
    FeedbackForm,
    FeedbackInput,
    FeedbackLabel,
    FeedbackPageBox,
    FeedbackPageImg,
    FeedbackTextarea,
    FPBox,
} from './FeedBackPage.styled';

export const FeedBacks = () => {
    const submitMessage = evt => {
        evt.preventDefault();
        console.log(evt.target.elements.name.value);
    };

    return (
        <div>
            <GoBackDiv>
                <Container>
                    <Button type="button">
                        <GoBackLink to="/">Go back</GoBackLink>
                    </Button>
                </Container>
            </GoBackDiv>
            <FeedbackPageBox>
                <Container>
                    <FPBox>
                        <FeedbackForm onSubmit={submitMessage}>
                            <FeedbackLabel>
                                Email
                                <FeedbackInput type="email" name="email" />
                            </FeedbackLabel>
                            <FeedbackLabel>
                                Name
                                <FeedbackInput type="text" name="name" />
                            </FeedbackLabel>
                            <FeedbackLabel>
                                Feedback
                                <FeedbackTextarea
                                    name="message"
                                    cols="30"
                                    rows="10"
                                ></FeedbackTextarea>
                            </FeedbackLabel>
                            <Button
                                type="sunmit"
                                style={{
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                }}
                            >
                                Send
                            </Button>
                        </FeedbackForm>
                        <ContactBox>
                            <Title>Contacts</Title>
                            <ul>
                                <li>
                                    <ContactLink href="mailto:noreply@envato.com">
                                        noreply@envato.com
                                    </ContactLink>
                                </li>
                                <li>
                                    <ContactLink href="tel:+610383766284">
                                        +61 (0) 383 766 284
                                    </ContactLink>
                                </li>
                                <li>
                                    <ContactAddress>
                                        125 W Mountain Ave,Fort Collins, CO
                                        80524, United States of America
                                    </ContactAddress>
                                </li>
                            </ul>
                            <FeedbackPageImg
                                src="http://pngimg.com/uploads/ice_cream/ice_cream_PNG5110.png"
                                alt="ice cream"
                            />
                        </ContactBox>
                    </FPBox>
                </Container>
            </FeedbackPageBox>
        </div>
    );
};
