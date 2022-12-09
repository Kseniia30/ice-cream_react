import { Modal } from 'components/Backdrop/Backdrop';
import { FooterSection } from 'components/FooterSection/FooterSection';
import { Suspense, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoIosIceCream } from 'react-icons/io';
import { Busket } from 'components/modals/Busket';
import LocationMap from 'components/modals/LocationMap';
import { IoIosArrowForward } from 'react-icons/io';
import css from './css/Layout.module.css';

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
        <div className={css.container}>
            <div className={css.mainHeader}>
                <div>
                    <Link to="/" className={css.logo}>
                        <IoIosIceCream /> ICE CREAM
                    </Link>
                </div>
                <button
                    type="button"
                    onClick={openBackdrop}
                    data-id="busket"
                    className={css.mainHeaderBtn}
                >
                    <span className={css.mainHeaderBtnSpan}>Busket</span>
                    <IoIosArrowForward />
                </button>
            </div>
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
        </div>
    );
};
