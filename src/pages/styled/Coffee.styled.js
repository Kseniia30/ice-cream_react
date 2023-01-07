import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CoffeeMainBox = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
    }
`;

export const CoffeeTextBox = styled.div`
    @media screen and (min-width: 768px) {
        width: 50%;
    }

    @media screen and (min-width: 768px) {
        width: auto;
    }
`;

export const CoffeeBox = styled.div`
    @media screen and (max-width: 767px) {
        background-image: linear-gradient(
                rgba(176, 178, 201, 0.6),
                rgba(176, 178, 201, 0.6)
            ),
            url('https://static.wixstatic.com/media/fefd7a_5b5febf365604cb6abdd4394b3ee758a~mv2.jpg/v1/fill/w_640,h_1482,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fefd7a_5b5febf365604cb6abdd4394b3ee758a~mv2.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center top;
        background-attachment: fixed;
        padding-top: 20px;
        padding-bottom: 20px;
    }
`;

export const CoffeeMainText = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #ffffff;
    margin-bottom: 32px;
    text-align: justify;
    text-indent: 15px;

    @media screen and (min-width: 768px) {
        color: #000;
    }

    @media screen and (min-width: 1200px) {
        font-size: 16px;
    }
`;

export const CoffeeMainImg = styled.img`
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
        border-radius: 24px;
        width: 300px;
        height: 450px;
        margin-left: 40px;
        margin-top: 60px;
    }

    @media screen and (min-width: 1200px) {
        width: auto;
        height: auto;
        margin-top: 20px;
    }
`;

export const CoffeeMainImgSecond = styled.img`
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
        border-radius: 24px;
        width: 300px;
        height: 450px;
        margin-left: 40px;
        margin-top: 60px;
    }

    @media screen and (min-width: 1200px) {
        display: none;
    }
`;

export const CoffeeLinkList = styled.ul`
    margin-bottom: 32px;

    @media screen and (min-width: 768px) {
        display: flex;
    }
`;

export const CoffeeLinkItem = styled.li`
    :not(:last-child) {
        margin-bottom: 8px;
    }

    @media screen and (min-width: 768px) {
        :not(:last-child) {
            margin-bottom: 0;
            margin-right: 16px;
        }
    }
`;

export const CoffeeNavLink = styled(NavLink)`
    display: block;
    width: 150px;
    color: rgb(255, 255, 255);
    background: rgb(255, 184, 202);
    border-radius: 22px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    align-items: center;
    text-align: center;
    transition-property: color, background;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    padding: 7px 20px;

    &.active {
        color: rgb(255, 184, 202);
        background: rgb(212, 20, 67);
    }

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 21px;
        padding: 12px 9px;
    }
`;
