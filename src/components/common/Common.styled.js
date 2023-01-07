import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 280px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 768px) {
        width: 704px;
        padding-left: 32px;
        padding-right: 32px;
    }

    @media screen and (min-width: 1200px) {
        width: 1168px;
        padding-left: 16px;
        padding-right: 16px;
    }
`;

export const Title = styled.h2`
    font-family: 'Titan One';
    font-weight: 400;
    font-size: 34px;
    line-height: 1.15;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #d41443;
    margin-bottom: 8px;

    @media screen and (min-width: 768px) {
        font-size: 48px;
        line-height: 55px;
        margin-bottom: 16px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 58px;
        line-height: 66px;
        margin-bottom: 15px;
    }
`;

export const LittleTitle = styled.h3`
    font-family: 'Titan One';
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    text-transform: uppercase;
    color: #ffa5ba;
    margin-bottom: 15px;

    @media screen and (min-width: 768px) {
        font-size: 26px;
        line-height: 30px;
        margin-bottom: 18px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 30px;
        line-height: 34px;
        margin-bottom: 16px;
    }
`;

export const Button = styled.button`
    background: #ffffff;
    border-radius: 22px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    border: none;
    display: flex;
    align-items: center;
    text-align: center;
    color: #d41443;
    transition-property: color, background;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    padding: 7px 20px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 21px;
        padding: 12px 37px;
    }

    :hover,
    :focus {
        background: #d41342;
        color: #ffffff;
    }
`;

export const GoBackDiv = styled.div`
    background: #ffb8ca;
    padding: 10px;
`;

export const GoBackLink = styled(Link)`
    color: inherit;
`;

export const PagesTitle = styled.h1`
    font-family: 'Titan One';
    font-weight: 400;
    font-size: 34px;
    line-height: 1.15;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #d41443;
    margin-bottom: 8px;
    margin-top: 8px;

    @media screen and (min-width: 768px) {
        font-size: 48px;
        line-height: 55px;
        margin-bottom: 16px;
        margin-top: 16px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 58px;
        line-height: 66px;
        margin-bottom: 15px;
        margin-top: 15px;
    }
`;

export const BusketButton = styled.button`
    background: #ffffff;
    border-radius: 22px;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.29;
    border: none;
    display: flex;
    align-items: center;
    text-align: center;
    color: #d41443;
    transition-property: color, background;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    padding: 4px 14px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 768px) {
        font-size: 15px;
        line-height: 1.31;
        padding: 8px 17px;
    }

    :hover,
    :focus {
        background: #d41342;
        color: #ffffff;
    }
`;
