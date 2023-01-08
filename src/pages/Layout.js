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
import { useDispatch, useSelector } from 'react-redux';
import { clearList } from 'redux/store';

export const LayOut = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalId, setModalId] = useState('');
    const productList = useSelector(state => state.productList);
    const dispatch = useDispatch();

    const toggleModal = evt => {
        setShowModal(!showModal);
    };
    const openBackdrop = evt => {
        toggleModal();
        setModalId(evt.currentTarget.dataset.id);
    };
    const closeBusket = evt => {
        evt.preventDefault();
        const form = evt.target.parentNode;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const phone = form.elements.phone.value;
        const address = form.elements.city.value;
        const payment = form.elements.type.value;
        const comment = form.elements.feedback.value;
        if (name === '') {
            return alert('Name is required');
        }
        if (email === '') {
            return alert('Email is required');
        }
        console.log({
            name,
            email,
            phone,
            address,
            payment,
            comment,
            productList,
        });
        toggleModal();
        alert(`${name}, your order is accepted`);
        dispatch(clearList());
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
                    <Busket onClose={closeBusket} />
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
