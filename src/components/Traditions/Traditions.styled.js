import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TraditionsBox = styled.div`
    padding-top: 40px;
    padding-bottom: 80px;

    @media screen and (min-width: 1200px) {
        background-image: url(http://pngimg.com/uploads/milk/milk_PNG12710.png);
        background-repeat: no-repeat;
        background-size: cover;
    }
`;

export const ImageBox = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
        position: relative;
    }

    @media screen and (min-width: 1200px) {
    }
`;

export const CowImage = styled.img`
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const TraditionsTextBox = styled.div`
    @media screen and (min-width: 768px) {
        margin-top: 40px;
    }

    @media screen and (min-width: 1200px) {
        margin-top: 60px;
    }
`;

export const TraditionsText = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.58;
    color: #000000;
    margin-bottom: 20px;
    text-align: justify;

    @media screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 1.79;
        margin-bottom: 40px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 16px;
        line-height: 1.75;
        letter-spacing: 0.04em;
    }
`;

export const TraditionsLink = styled(Link)`
    background: #ffffff;
    border-radius: 22px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    border: none;
    width: 176px;
    justify-content: center;
    align-items: center;
    display: flex;
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

export const TradidionsContentBox = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
    }
`;

export const MainCowImage = styled.img`
    position: absolute;
    bottom: -80px;
    right: -32px;
    width: 400px;

    @media screen and (min-width: 1200px) {
        width: 600px;
    }
`;

export const MilkImage = styled.img`
    width: 250px;
    margin-left: 30px;
    margin-right: 70px;

    @media screen and (min-width: 1200px) {
        width: 400px;
        margin-left: 90px;
        margin-right: 100px;
    }
`;
