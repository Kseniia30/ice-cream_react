import { Modal } from 'components/Backdrop/Backdrop';
import { HeaderSection } from 'components/HeaderSection/HeaderSection';
import { Location } from 'components/Location/Location';
import { Technologies } from 'components/modals/Tecnologies';
import { Products } from 'components/Products/Products';
import { Traditions } from 'components/Traditions/Traditions';
import { useState } from 'react';

export const HomePage = () => {
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
        <>
            <HeaderSection openModal={openBackdrop} />
            <Products />
            <Traditions />
            <Location />
            {showModal && modalId === 'technologies' && (
                <Modal onClose={toggleModal}>
                    <Technologies />
                </Modal>
            )}
        </>
    );
};
