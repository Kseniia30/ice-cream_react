import {
    HeaderMobileList,
    HeaderMobileListItem,
    HeaderMobileListLink,
} from './styled/Header.styled';

export const HeaderMobileMenu = ({ closeMenu }) => {
    return (
        <div id="mobileMenu">
            <HeaderMobileList>
                <HeaderMobileListItem>
                    <HeaderMobileListLink href="#hero">
                        Home
                    </HeaderMobileListLink>
                </HeaderMobileListItem>
                <HeaderMobileListItem>
                    <HeaderMobileListLink href="#products" onClick={closeMenu}>
                        Products
                    </HeaderMobileListLink>
                </HeaderMobileListItem>
                <HeaderMobileListItem>
                    <HeaderMobileListLink href="#tradition" onClick={closeMenu}>
                        Tradition and Love
                    </HeaderMobileListLink>
                </HeaderMobileListItem>
                <HeaderMobileListItem>
                    <HeaderMobileListLink href="#location" onClick={closeMenu}>
                        Location
                    </HeaderMobileListLink>
                </HeaderMobileListItem>
                <HeaderMobileListItem>
                    <HeaderMobileListLink href="#footer" onClick={closeMenu}>
                        Feedback
                    </HeaderMobileListLink>
                </HeaderMobileListItem>
            </HeaderMobileList>
        </div>
    );
};
