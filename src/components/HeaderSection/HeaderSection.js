import { Header } from './Header';
import { Hero } from './Hero';
import { HeaderSectionBox } from './styled/HeaderSection.styled';

export const HeaderSection = ({ openModal }) => {
    return (
        <>
            <HeaderSectionBox>
                <Header openModal={openModal} />
                <Hero openModal={openModal} />
            </HeaderSectionBox>
        </>
    );
};
