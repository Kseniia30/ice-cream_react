import styled from 'styled-components';

export const LocationList = styled.ul`
    padding-top: 40px;
    padding-bottom: 16px;

    @media screen and (min-width: 768px) {
        display: flex;
        padding-top: 120px;
        padding-bottom: 30px;
    }

    @media screen and (min-width: 1200px) {
    }
`;

export const LocationItem = styled.li`
    background: #ffffff;
    box-shadow: 0px 8px 30px rgba(212, 20, 67, 0.1);
    border-radius: 24px;
    padding: 40px 32px;

    :not(:last-child) {
        margin-bottom: 20px;
    }

    @media screen and (min-width: 768px) {
        :not(:last-child) {
            margin-bottom: 0px;
            margin-right: 32px;
        }
    }

    @media screen and (min-width: 1200px) {
        padding: 40px;
        width: calc(100% / 3 - 32px);
    }
`;

export const Cafe = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.83;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #ffffff;
    background: #f0d1a5;
    border-radius: 4px;
    display: block;
    width: 80px;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.87;
        width: 73px;
    }
`;

export const FoodTruck = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.83;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #ffffff;
    background: #c2e297;
    border-radius: 4px;
    display: block;
    width: 130px;
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.87;
        width: 138px;
    }
`;

export const City = styled.address`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.83;
    letter-spacing: 0.04em;
    color: #000000;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.87;
    }
`;

export const DateList = styled.ul`
    padding-top: 24px;
    padding-bottom: 24px;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    margin-bottom: 24px;
`;

export const DateItem = styled.li`
    :not(:last-child) {
        margin-bottom: 8px;
    }
`;
export const Days = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.83;
    letter-spacing: 0.04em;
    color: #000000;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.87;
    }
`;

export const Time = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.83;
    color: #ffa5ba;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.87;
    }
`;

export const LocationLink = styled.a`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.5;
    color: #907e82;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.81;
    }
`;
