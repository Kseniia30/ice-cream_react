import { Header } from './Header';
import { Hero } from './Hero';

export const HeaderSection = ({ openModal }) => {
    return (
        <>
            <div>
                <Header />
                <Hero openModal={openModal} />
            </div>
        </>
    );
};
