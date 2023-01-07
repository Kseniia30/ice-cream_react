import { Container } from 'components/common/Common.styled';
import { FooterBox, Footertext } from './styled/Footer.styled';

export const Footer = () => {
    return (
        <FooterBox>
            <Container>
                <Footertext>© 2019 - IceCream. All Rights Reserved</Footertext>
            </Container>
        </FooterBox>
    );
};
