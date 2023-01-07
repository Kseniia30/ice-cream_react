import { Section } from 'components/common/Section';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {
    HeroAngularImg,
    HeroBox,
    HeroCircle,
    HeroLink,
    HeroLinkItem,
    HeroLinkList,
    HeroMainImg,
    HeroTitle,
    HeroTitleBox,
    HeroTitleSpan,
    ShopsItem,
    ShopsList,
    ShopsNumbers,
    ShopsType,
    TechnologiesBox,
    TechnologiesBtn,
    TechnologiesImg,
    TechnologiesText,
} from './styled/Hero.styled';
import slider from '../../images/slider-pic7 1.png';

export const Hero = ({ openModal }) => {
    return (
        <Section id="hero">
            <HeroBox>
                <div>
                    <HeroTitleBox>
                        <HeroTitle>
                            ice cream <br />
                            made with <br />
                            <HeroTitleSpan>passion</HeroTitleSpan>
                        </HeroTitle>
                        <HeroLinkList>
                            <HeroLinkItem>
                                <HeroLink href="#products">Products</HeroLink>
                            </HeroLinkItem>
                            <HeroLinkItem>
                                <HeroLink href="#tradition">
                                    How it’s made?
                                </HeroLink>
                            </HeroLinkItem>
                        </HeroLinkList>
                    </HeroTitleBox>
                    <TechnologiesBox>
                        <TechnologiesImg
                            src="http://pngimg.com/uploads/milk/milk_PNG98320.png"
                            alt="milk"
                        />
                        <div>
                            <TechnologiesText>
                                <b>All things ice – innovations in ice cream</b>
                                <br />
                                In response to popular demand, Food Processing
                                Technology looks at the very latest in ice cream
                                flavouring and manufacturing technology. Frances
                                Cook gets a taste of the flavours and trends
                                currently whetting appetites for ice cream
                                lovers and manufacturers alike.
                            </TechnologiesText>
                            <TechnologiesBtn
                                type="button"
                                onClick={openModal}
                                data-id="technologies"
                            >
                                <AiOutlineArrowRight />
                            </TechnologiesBtn>
                        </div>
                    </TechnologiesBox>
                </div>
                <ShopsList>
                    <ShopsItem>
                        <ShopsNumbers>16</ShopsNumbers>
                        <ShopsType>cafes</ShopsType>
                    </ShopsItem>
                    <ShopsItem>
                        <ShopsNumbers>23</ShopsNumbers>
                        <ShopsType>food trucks</ShopsType>
                    </ShopsItem>
                    <HeroAngularImg
                        src="http://pngimg.com/uploads/ice_cream/ice_cream_PNG20992.png"
                        alt="couple with ice cream"
                    />
                </ShopsList>
                <HeroCircle></HeroCircle>
                <HeroMainImg
                    src={slider}
                    alt="ice cream"
                    width="236"
                    height="519"
                />
            </HeroBox>
        </Section>
    );
};
