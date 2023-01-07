import styled from 'styled-components';

export const HeaderList = styled.ul`
    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
        padding-top: 10px;
        justify-content: center;
    }

    @media screen and (min-width: 1200px) {
        padding-top: 20px;
    }
`;

export const HeaderListItem = styled.li`
    :not(:last-child) {
        margin-right: 15px;
    }

    @media screen and (min-width: 1200px) {
        :not(:last-child) {
            margin-right: 35px;
        }
    }
`;

export const HeaderListLink = styled.a`
    font-weight: 700;
    font-size: 16px;
    line-height: 1/31;
    display: flex;
    align-items: center;
    color: #ffffff;
    transition-property: color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        color: #d41342;
    }
`;

export const HeaderMobileMenuBtn = styled.button`
    background-color: transparent;
    border: none;
    color: #d41443;
    display: flex;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const HeaderMobileList = styled.ul``;

export const HeaderMobileListItem = styled.li`
    :not(:last-child) {
        margin-bottom: 32px;
    }
`;

export const HeaderMobileListLink = styled.a`
    font-weight: 700;
    font-size: 14px;
    line-height: 1.29;
    display: flex;
    align-items: center;
    color: #ffffff;
    transition-property: color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        color: #d41342;
    }
`;
