import { Modal } from 'components/Backdrop/Backdrop';
import { FooterSection } from 'components/FooterSection/FooterSection';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { IoIosIceCream } from 'react-icons/io';
import { Busket } from 'components/modals/Busket';
import LocationMap from 'components/modals/LocationMap';
import { IoIosArrowForward } from 'react-icons/io';
import { Button, Container } from 'components/common/Common.styled';
import {
    HeaderDiv,
    LayoutHeader,
    LayoutMainBox,
    Logo,
} from './styled/LayoutStyled';

export const LayOut = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalId, setModalId] = useState('');

    const toggleModal = evt => {
        setShowModal(!showModal);
    };
    const openBackdrop = evt => {
        toggleModal();
        setModalId(evt.currentTarget.dataset.id);
    };
    return (
        <LayoutMainBox>
            <LayoutHeader>
                <Container>
                    <HeaderDiv>
                        <div>
                            <Logo to="/">
                                <IoIosIceCream /> ICE CREAM
                            </Logo>
                        </div>
                        <Button
                            type="button"
                            onClick={openBackdrop}
                            data-id="busket"
                        >
                            <span>Busket</span>
                            <IoIosArrowForward />
                        </Button>
                    </HeaderDiv>
                </Container>
            </LayoutHeader>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <FooterSection openModal={openBackdrop} />
            {showModal && modalId === 'busket' && (
                <Modal onClose={toggleModal}>
                    <Busket />
                </Modal>
            )}
            {showModal && modalId === 'map' && (
                <Modal onClose={toggleModal}>
                    <LocationMap />
                </Modal>
            )}
        </LayoutMainBox>
    );
};
