import styled from 'styled-components';

export const LocationTitle = styled.h2`
    font-family: 'Titan One';
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    text-transform: uppercase;
    color: #d41443;
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

export const MapBox = styled.div`
    text-align: center;
`;

export const Map = styled.iframe`
    border-radius: 24px;
    width: 240px;
    height: 240px;

    @media screen and (min-width: 768px) {
        width: 380px;
        height: 380px;
    }

    @media screen and (min-width: 1200px) {
        width: 500px;
        height: 500px;
    }
`;
