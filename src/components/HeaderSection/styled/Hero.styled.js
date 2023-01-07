import styled from 'styled-components';

export const HeroBox = styled.div`
    padding-bottom: 158px;
    padding-top: 130px;
    position: relative;
    z-index: 1;

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        padding-bottom: 12px;
        padding-top: 16px;
    }

    @media screen and (min-width: 1200px) {
        padding-bottom: 52px;
        padding-top: 60px;
    }
`;

export const HeroTitleBox = styled.div`
    z-index: 1;
    position: relative;
`;

export const HeroTitle = styled.h1`
    font-family: 'Titan One';
    font-weight: 400;
    font-size: 26px;
    line-height: 1.15;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #ffffff;

    @media screen and (min-width: 768px) {
        font-size: 22px;
        line-height: 1.14;
    }

    @media screen and (min-width: 1200px) {
        font-size: 38px;
        line-height: 1.16;
    }
`;

export const HeroTitleSpan = styled.span`
    color: #d41443;
    font-size: 48px;
    line-height: 0.96;

    @media screen and (min-width: 768px) {
        font-size: 34px;
        line-height: 0.88;
    }

    @media screen and (min-width: 1200px) {
        font-size: 58px;
        line-height: 0.9;
    }
`;

export const HeroLinkList = styled.ul`
    display: flex;
    margin-top: 20px;

    @media screen and (min-width: 1200px) {
        margin-top: 35px;
    }
`;

export const HeroLinkItem = styled.li`
    :not(:last-child) {
        margin-right: 10px;
    }
`;

export const HeroLink = styled.a`
    background: #ffffff;
    border-radius: 22px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #d41443;
    padding: 7px 20px;
    transition-property: color, background;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

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

export const TechnologiesBox = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
        margin-top: 40px;
    }
`;

export const TechnologiesImg = styled.img`
    width: 152px;

    @media screen and (min-width: 1200px) {
        width: 213px;
    }
`;

export const TechnologiesText = styled.p`
    width: 114px;
    font-weight: 400;
    font-size: 8px;
    line-height: 1.5;
    color: #ffffff;

    @media screen and (min-width: 1200px) {
        width: 200px;
    }
`;

export const TechnologiesBtn = styled.button`
    border: none;
    color: #d41443;
    background-color: #fff;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    display: inline-flex;
    align-items: center;
    margin-top: 7px;
`;

export const ShopsList = styled.ul`
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
        text-align: end;
    }
`;

export const ShopsItem = styled.li`
    position: relative;

    :not(:last-child) {
        margin-bottom: 17px;
    }

    ::before {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        background-color: #fff;
        border-radius: 50%;
        top: -2px;
        right: -10px;
    }

    @media screen and (min-width: 1200px) {
        ::before {
            width: 30px;
            height: 30px;
            top: -15px;
            right: -15px;
        }
    }
`;

export const ShopsNumbers = styled.h2`
    font-family: 'Titan One';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 1.4;
    text-align: right;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #d41443;

    @media screen and (min-width: 1200px) {
        font-size: 46px;
        line-height: 1.15;
    }
`;

export const ShopsType = styled.p`
    font-weight: 400;
    font-size: 8px;
    line-height: 1.25;
    text-align: right;
    color: #ffffff;

    @media screen and (min-width: 1200px) {
        font-size: 14px;
        line-height: 1.29;
    }
`;

export const HeroAngularImg = styled.img`
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 190px;
        height: 168px;
        z-index: 1;
    }

    @media screen and (min-width: 1200px) {
        width: 304px;
        height: 268px;
    }
`;

export const HeroCircle = styled.div`
    position: absolute;
    width: 346px;
    height: 344px;
    right: -90px;
    top: 83px;
    background: #ffa5ba;
    border-radius: 50%;
    z-index: 0;

    @media screen and (min-width: 768px) {
        top: 10px;
        right: 80px;
        width: 335px;
        height: 333px;
    }

    @media screen and (min-width: 1200px) {
        right: 229px;
        width: 534px;
        height: 534px;
    }
`;

export const HeroMainImg = styled.img`
    position: absolute;
    width: 171px;
    height: 410px;
    z-inde: 0;
    bottom: 0;
    right: 32px;

    @media screen and (min-width: 768px) {
        right: 200px;
        width: 143px;
        height: 336px;
    }

    @media screen and (min-width: 1200px) {
        right: 408px;
        width: 236px;
        height: 557px;
    }
`;
