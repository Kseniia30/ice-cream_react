import styled from 'styled-components';

export const FeedbackPageBox = styled.div`
    background-color: #fff5f6;
    padding-top: 40px;
    padding-bottom: 40px;
    background-image: url(http://pngimg.com/uploads/milk/milk_PNG12688.png);
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (min-width: 768px) {
        background-image: url(http://pngimg.com/uploads/milk/milk_PNG12710.png);
    }
`;

export const FPBox = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
    }
`;

export const FeedbackForm = styled.form`
    text-align: center;
    @media screen and (min-width: 768px) {
        width: 50%;
        margin-right: 20px;
    }
`;

export const FeedbackLabel = styled.label`
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

export const FeedbackInput = styled.input`
    width: 280px;
    height: 50px;
    border: none;
    border-radius: 24px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #d41443;
    padding-left: 15px;

    @media screen and (min-width: 768px) {
        width: 320px;
    }

    @media screen and (min-width: 1200px) {
        width: 500px;
    }
`;

export const FeedbackTextarea = styled.textarea`
    width: 280px;
    height: 150px;
    border: none;
    border-radius: 24px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #d41443;
    padding: 15px;

    @media screen and (min-width: 768px) {
        width: 320px;
    }

    @media screen and (min-width: 1200px) {
        width: 500px;
    }
`;

export const ContactBox = styled.div`
    display: none;

    @media screen and (min-width: 768px) {
        position: relative;
        display: block;
    }
`;

export const FeedbackPageImg = styled.img`
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 280px;
    height: 270px;

    @media screen and (min-width: 1200px) {
        bottom: -20px;
        right: -130px;
        width: 320px;
        height: 308px;
    }
`;

export const ContactLink = styled.a`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.87;
    color: #ffa5ba;
`;

export const ContactAddress = styled.address`
    font-weight: 500;
    font-size: 14px;
    line-height: 1.79;
    margin-top: 20px;
    color: #000000;
    margin-bottom: 20px;
    text-align: justify;

    @media screen and (min-width: 1200px) {
        width: 300px;
        font-size: 16px;
        line-height: 1.75;
        letter-spacing: 0.04em;
    }
`;
