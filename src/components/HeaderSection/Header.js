import { Container } from 'components/common/Common.styled';
import {
    HeaderList,
    HeaderListItem,
    HeaderListLink,
    HeaderMobileMenuBtn,
} from './styled/Header.styled';

import { AiOutlineMenu } from 'react-icons/ai';

export const Header = ({ openModal }) => {
    return (
        <header>
            <Container>
                <HeaderMobileMenuBtn
                    type="button"
                    data-id="mobileMenu"
                    onClick={openModal}
                >
                    <AiOutlineMenu />
                    <AiOutlineMenu />
                </HeaderMobileMenuBtn>
                <HeaderList>
                    <HeaderListItem>
                        <HeaderListLink href="#hero">Home</HeaderListLink>
                    </HeaderListItem>
                    <HeaderListItem>
                        <HeaderListLink href="#products">
                            Products
                        </HeaderListLink>
                    </HeaderListItem>
                    <HeaderListItem>
                        <HeaderListLink href="#tradition">
                            Tradition and Love
                        </HeaderListLink>
                    </HeaderListItem>
                    <HeaderListItem>
                        <HeaderListLink href="#location">
                            Location
                        </HeaderListLink>
                    </HeaderListItem>
                    <HeaderListItem>
                        <HeaderListLink href="#footer">Feedback</HeaderListLink>
                    </HeaderListItem>
                </HeaderList>
            </Container>
        </header>
    );
};
