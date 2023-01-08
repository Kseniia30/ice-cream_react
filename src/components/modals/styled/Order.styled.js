import styled from 'styled-components';

export const OrderBox = styled.div`
    margin-top: 20px;
`;
export const OrderLabel = styled.label`
    font-family: 'Titan One';
    display: block;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.15;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #d41443;
`;

export const OrderInput = styled.input`
    width: 230px;
    height: 30px;
    border-radius: 24px;
    border: none;
    color: #d41443;
    padding-left: 15px;
    margin-top: 10px;
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
        width: 300px;
        height: 40px;
        margin-left: 10px;
    }

    @media screen and (min-width: 1200px) {
        width: 400px;
        height: 50px;
    }
`;

export const OrderSelect = styled.select`
    width: 230px;
    height: 35px;
    border-radius: 24px;
    border: none;
    color: #d41443;
    padding-left: 15px;
    padding-right: 20px;
    margin-top: 10px;
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
        width: 300px;
        height: 40px;
        margin-left: 10px;
    }

    @media screen and (min-width: 1200px) {
        width: 400px;
        height: 50px;
    }
`;
export const OrderOptions = styled.option`
    width: 230px;
`;

export const OrderTextArea = styled.textarea`
    width: 220px;
    height: 60px;
    border-radius: 24px;
    border: none;
    color: #d41443;
    padding: 15px;
    margin-top: 10px;
    margin-bottom: 20px;
    resize: none;

    @media screen and (min-width: 768px) {
        width: 300px;
        height: 80px;
    }

    @media screen and (min-width: 1200px) {
        width: 400px;
        height: 100px;
    }
`;
