import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LayoutMainBox = styled.div`
    overflow: hidden;
`;
export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    font-family: 'Titan One';
    font-weight: 400;
    font-size: 25px;
    line-height: 1.15;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #d41443;
    margin-right: 40px;

    @media screen and (min-width: 768px) {
        margin-right: 0;
    }
`;

export const LayoutHeader = styled.div`
    background: #ffb8ca;
    padding-top: 8px;
    padding-bottom: 8px;

    @media screen and (min-width: 768px) {
        padding-top: 32px;
    }

    @media screen and (min-width: 1200px) {
        padding-top: 40px;
    }
`;

export const HeaderDiv = styled.div`
    display: flex;
    align-items: center;

    @media screen and (min-width: 768px) {
        justify-content: space-between;
    }
`;
