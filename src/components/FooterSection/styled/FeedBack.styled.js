import styled from 'styled-components';

export const FeedBackBtnList = styled.ul`
    display: grid;
    margin-bottom: 48px;

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
    }
`;

export const FeedBackBtnItem = styled.li`
    :not(:last-child) {
        margin-bottom: 10px;
    }
    @media screen and (min-width: 768px) {
        :not(:last-child) {
            margin-bottom: 0;
            margin-right: 14px;
        }
    }
`;

export const FeedBackContentBox = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;
export const FeedbackTitle = styled.h3`
    width: 232px;
    text-align: left;
    font-family: 'Titan One';
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    color: #ffa5ba;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        width: 340px;
        font-size: 26px;
        line-height: 30px;
        margin-bottom: 18px;
    }

    @media screen and (min-width: 1200px) {
        width: 472px;
        font-size: 30px;
        line-height: 34px;
        margin-bottom: 16px;
    }
`;

export const FeedbackSpan = styled.span`
    font-family: 'Titan One';
    font-weight: 400;
    font-size: 34px;
    line-height: 1.15;
    text-align: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #d41443;
    margin-top: 16px;

    @media screen and (min-width: 768px) {
        font-size: 48px;
        line-height: 55px;
        margin-top: 12px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 58px;
        line-height: 66px;
        margin-top: 16px;
    }
`;

export const SocialList = styled.ul`
    display: flex;
    justify-content: end;
    margin-bottom: 40px;
`;

export const SocialItem = styled.li`
    :not(:last-child) {
        margin-right: 28px;
    }
`;

export const SocialLink = styled.a`
    background: #fea5bb;
    color: #ffffff;
    border-radius: 50%;
    padding: 4px;
    text-align: center;
    display: inline-flex;
    align-items: center;

    @media screen and (min-width: 768px) {
        padding: 6px;
    }

    @media screen and (min-width: 768px) {
        padding: 8px;
    }
`;

export const FeedBackPhone = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 1.83;
    text-align: right;
    color: #000000;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 1.87;
    }
`;

export const FeedBackPhoneLink = styled.a`
    color: #d41342;
    margin-left: 5px;
`;
