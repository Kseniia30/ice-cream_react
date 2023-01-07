import styled from 'styled-components';

export const FooterBox = styled.footer`
    border-top: 1px solid #e1e1e1;
    padding-top: 16px;
`;

export const Footertext = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 1.5;
    text-align: center;
    color: #907e82;

    @media screen and (max-width: 767px) {
        width: 140px;
        margin-left: auto;
        margin-right: auto;
    }
`;
