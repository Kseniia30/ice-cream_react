import styled from 'styled-components';

export const BusketList = styled.ul`
    margin-bottom: 20px;
`;

export const BusketItem = styled.li`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;

    :not(:last-child) {
        margin-bottom: 10px;
    }
`;

export const AmountBox = styled.div`
    display: flex;
    align-items: baseline;
    margin-left: 7px;
`;

export const BusketProductName = styled.b`
    font-weight: 700;
    color: #fff;
    width: 200px;
`;

export const BusketProductAmount = styled.p`
    font-weight: 400;
    color: #fff;
    margin-left: 4px;
`;

export const QuantityBtn = styled.button`
    font-weight: 700;
    border: none;
    color: #d41443;
    background-color: #fff;
    border-radius: 50%;
    padding: 3px;
    text-align: center;
    display: inline-flex;
    align-items: center;
    margin-left: 4px;
`;

export const BuyButton = styled.button`
    margin-left: auto;
    margin-right: auto;
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
