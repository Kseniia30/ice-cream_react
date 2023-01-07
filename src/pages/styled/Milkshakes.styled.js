import styled from 'styled-components';

export const MilkshakesList = styled.ul`
    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        margin-top: -16px;
        margin-right: -16px;
    }

    @media screen and (min-width: 1200px) {
        margin-right: -32px;
        margin-top: -32px;
    }
`;

export const MilkshakesItem = styled.li`
    padding: 20px;
    width: 240px;
    background: #c2e297;
    border-radius: 24px;
    text-align: center;

    :not(:last-child) {
        margin-bottom: 20px;
    }

    @media screen and (min-width: 768px) {
        margin-right: 16px;
        margin-top: 16px;
        width: calc(100% / 2 - 56px);

        :not(:last-child) {
            margin-bottom: 0;
        }
    }

    @media screen and (min-width: 1200px) {
        margin-right: 32px;
        margin-top: 32px;
        width: calc(100% / 2 - 72px);
    }
`;

export const MilkshakesName = styled.h2`
    font-family: 'Titan One';
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #d41342;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 20px;
    }
`;

export const MilkshakesSub = styled.p`
    text-align: justify;
    text-indent: 15px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 18px;
    }
`;

export const MilkshakesImg = styled.img`
    width: 200px;
    border-radius: 24px;
    margin-top: 20px;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        width: 300px;
    }

    @media screen and (min-width: 1200px) {
        width: 500px;
    }
`;
