import styled from 'styled-components';

export const TechnologiesTitle = styled.h2`
    font-family: 'Titan One';
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    color: #d41443;
    font-size: 26px;
    line-height: 30px;
    margin-top: 18px;
    margin-bottom: 18px;

    @media screen and (min-width: 1200px) {
        font-size: 30px;
        line-height: 34px;
        margin-top: 16px;
        margin-bottom: 16px;
    }
`;

export const TechnologiesText = styled.p`
    text-indent: 10px;
    text-align: justify;
`;

export const AdditionalBox = styled.div`
    display: flex;
`;

export const AdditionalTitle = styled.h3`
    margin: 20px;
    font-style: italic;
`;
