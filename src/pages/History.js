import { historyData, historyImages } from 'data/historyData';
import { nanoid } from 'nanoid';
import {
    Button,
    Container,
    GoBackDiv,
    GoBackLink,
    LittleTitle,
    PagesTitle,
} from 'components/common/Common.styled';
import {
    HistoryBox,
    HistoryContentBox,
    HistoryContentItem,
    HistoryContentList,
    HistoryContentText,
    HistoryContentTime,
    HistoryContentTitle,
    HistoryImage,
    HistoryImagesItem,
    HistoryImagesList,
} from './styled/History.styled';

const History = () => {
    return (
        <>
            <GoBackDiv>
                <Container>
                    <Button type="button">
                        <GoBackLink to="/">Go back</GoBackLink>
                    </Button>
                </Container>
            </GoBackDiv>
            <HistoryBox>
                <PagesTitle>History of coffee</PagesTitle>
                <LittleTitle>(By Robin Weir)</LittleTitle>
                <HistoryContentBox>
                    <HistoryImagesList>
                        {historyImages.map(image => {
                            const { id, src, height } = image;
                            return (
                                <HistoryImagesItem key={id}>
                                    <HistoryImage
                                        src={src}
                                        alt="ice cream"
                                        width="240"
                                        height={height}
                                    />
                                </HistoryImagesItem>
                            );
                        })}
                    </HistoryImagesList>
                    <HistoryContentList>
                        {historyData.map(item => {
                            const { id, title, time, content } = item;
                            return (
                                <HistoryContentItem key={id}>
                                    <HistoryContentTime>
                                        {time}
                                    </HistoryContentTime>
                                    <HistoryContentTitle>
                                        {title}
                                    </HistoryContentTitle>
                                    {content.map(text => {
                                        return (
                                            <HistoryContentText key={nanoid()}>
                                                {text}
                                            </HistoryContentText>
                                        );
                                    })}
                                </HistoryContentItem>
                            );
                        })}
                    </HistoryContentList>
                </HistoryContentBox>
            </HistoryBox>
        </>
    );
};
export default History;
