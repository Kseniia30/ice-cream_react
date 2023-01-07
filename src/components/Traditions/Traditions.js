import { LittleTitle, Title } from 'components/common/Common.styled';
import { Section } from 'components/common/Section';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {
    CowImage,
    ImageBox,
    MainCowImage,
    MilkImage,
    TradidionsContentBox,
    TraditionsBox,
    TraditionsLink,
    TraditionsText,
    TraditionsTextBox,
} from './Traditions.styled';
import cow from '../../images/cow.png';

export const Traditions = () => {
    return (
        <Section id="tradition" style={{ background: '#fff5f6' }}>
            <TraditionsBox>
                <LittleTitle>tradition and love </LittleTitle>
                <Title>how it’s made?</Title>
                <TradidionsContentBox>
                    <CowImage src={cow} alt="cow" width="280" />
                    <TraditionsTextBox>
                        <TraditionsText>
                            One of the most widespread and well-known desserts
                            thanks to his kindness and authenticity of the
                            ingredients! Fresh and high quality food that
                            represents excellence and Italian creativity in the
                            world. But have you ever wondered when, where and
                            why was invented ice cream? Italian Traditions tells
                            you a beautiful story that mixes legends and folk
                            beliefs and testimonies of an ancient tradition.
                        </TraditionsText>
                        <TraditionsLink to="/history">
                            Read more
                            <AiOutlineArrowRight />
                        </TraditionsLink>
                    </TraditionsTextBox>
                    <ImageBox>
                        <MainCowImage
                            src="http://pngimg.com/uploads/cow/cow_PNG50576.png"
                            alt="cow"
                        />
                        <MilkImage
                            src="http://pngimg.com/uploads/milk/milk_PNG12758.png"
                            alt="milk"
                        />
                    </ImageBox>
                </TradidionsContentBox>
            </TraditionsBox>
        </Section>
    );
};
