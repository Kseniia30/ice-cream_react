import styled from 'styled-components';

export const HistoryBox = styled.div`
    background-image: linear-gradient(
            rgba(176, 178, 201, 0.6),
            rgba(176, 178, 201, 0.6)
        ),
        url('https://img.freepik.com/free-photo/close-up-ice-cream-with-cookie_23-2148507905.jpg?w=2000');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    background-attachment: fixed;
    padding: 20px 16px;

    @media screen and (min-width: 768px) {
        background-image: linear-gradient(
                rgba(176, 178, 201, 0.6),
                rgba(176, 178, 201, 0.6)
            ),
            url('https://thumbs.dreamstime.com/b/chocolate-ice-cream-cup-table-isolated-close-up-horizontal-composition-front-view-147087095.jpg');
    }
`;

export const HistoryContentBox = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
    }
`;

export const HistoryImagesList = styled.ul`
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
        margin-right: 20px;
    }
`;

export const HistoryImagesItem = styled.li`
    :not(:last-child) {
        margin-bottom: 60px;
    }

    @media screen and (min-width: 1200px) {
        :not(:last-child) {
            margin-bottom: 10px;
        }

        :last-child {
            display: none;
        }
    }
`;

export const HistoryImage = styled.img`
    border-radius: 24px;
`;

export const HistoryContentList = styled.ul``;

export const HistoryContentItem = styled.li`
    :not(:last-child) {
        margin-bottom: 15px;
    }
`;

export const HistoryContentTime = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #b07e8b;
    text-align: center;
    margin-bottom: 7px;

    @media screen and (min-width: 768px) {
        color: #cd637b;
        font-size: 18px;
        line-height: 1.75;
    }
`;

export const HistoryContentTitle = styled.h2`
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    color: #d41443;
    text-align: center;
    margin-bottom: 10px;

    @media screen and (min-width: 768px) {
        font-size: 20px;
        line-height: 1.75;
    }
`;

export const HistoryContentText = styled.p`
    font-weight: 400;
    text-align: justify;
    font-size: 14px;
    line-height: 1.5;
    text-indent: 15px;

    @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.31;
    }
`;
