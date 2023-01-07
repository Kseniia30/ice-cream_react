import { Link } from 'react-router-dom';
import styled from 'styled-components';
import firstPict from '../../images/home-pic1.png';
import secondPict from '../../images/home-pic2.png';
import thirdPict from '../../images/home-pic3.png';

export const ProductBox = styled.div`
    padding-top: 80px;
    padding-bottom: 40px;

    @media screen and (min-width: 768px) {
        padding-top: 40px;
        padiing-bottom: 60px;
    }

    @media screen and (min-width: 1200px) {
        padding-top: 60px;
    }
`;

export const ProductList = styled.ul`
    margin-top: 140px;

    @media screen and (min-width: 768px) {
        display: flex;
    }

    @media screen and (min-width: 1200px) {
        margin-top: 265px;
    }
`;

export const ProductItemFirst = styled.li`
    position: relative;
    padding: 160px 40px 40px;
    width: 200px;
    background: #ffb8ca;
    border-radius: 24px;
    text-align: center;

    ::before {
        content: '';
        position: absolute;
        left: 0;
        top: -140px;
        width: 280px;
        height: 280px;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${firstPict});
    }

    @media screen and (min-width: 768px) {
        margin-right: 16px;
        width: 160px;
        padding: 116px 32px 70px;

        ::before {
            width: 224px;
            height: 224px;
        }
    }

    @media screen and (min-width: 1200px) {
        margin-right: 32px;
        width: 245px;
        padding: 133px 75px 118px;

        ::before {
            width: 394px;
            height: 394px;
            top: -292px;
        }
    }
`;

export const ProductItemSecond = styled.li`
    position: relative;
    background: #f0d1a5;
    width: 200px;
    padding: 160px 40px 40px;
    border-radius: 24px;
    margin-top: 140px;
    text-align: center;

    ::before {
        content: '';
        position: absolute;
        left: 0;
        top: -140px;
        width: 280px;
        height: 280px;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${secondPict});
    }

    @media screen and (min-width: 768px) {
        margin-right: 16px;
        margin-top: 0;
        width: 160px;
        padding: 116px 32px 70px;

        ::before {
            width: 224px;
            height: 224px;
        }
    }

    @media screen and (min-width: 1200px) {
        margin-right: 32px;
        width: 245px;
        padding: 133px 75px 118px;

        ::before {
            width: 394px;
            height: 394px;
            top: -292px
        }
    }
    }
`;

export const ProductItemThird = styled.li`
    position: relative;
    background: #c2e297;
    width: 200px;
    padding: 160px 40px 40px;
    border-radius: 24px;
    margin-top: 140px;
    text-align: center;

    ::before {
        content: '';
        position: absolute;
        left: 0;
        top: -140px;
        width: 280px;
        height: 280px;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${thirdPict});
    }

    @media screen and (min-width: 768px) {
        margin-top: 0;
        width: 160px;
        padding: 116px 32px 70px;

        ::before {
            width: 224px;
            height: 224px;
        }
    }

    @media screen and (min-width: 1200px) {
        width: 245px;
        padding: 133px 75px 118px;

        ::before {
            width: 394px;
            height: 394px;
            top: -292px
        }
    }
    }
`;

export const ProductTitle = styled.h3`
    position: relative;
    font-family: 'Titan One';
    font-weight: 400;
    font-size: 20px;
    line-height: 1.15;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #ffffff;
    margin-bottom: 70px;

    ::after {
        content: '...';
        position: absolute;
        left: calc((100% - 26px) / 2);
        bottom: -32px;
        width: 26px;
        height: 6px;
    }

    @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 1200px) {
    }
`;

export const ProductText = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #ffffff;
    margin-bottom: 32px;
`;

export const ProductLink = styled(Link)`
    color: #d41443;
    background-color: #fff;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    display: inline-flex;
    align-items: center;

    @media screen and (min-width: 768px) {
        position: absolute;
        bottom: 40px;
        left: calc((100% - 36px) / 2);
    }

    @media screen and (min-width: 1200px) {
        bottom: 60px;
        padding: 15px;
    }
`;
