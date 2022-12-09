import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Backdrop.module.css';
import PropTypes from 'prop-types';
import { RxCross2 } from 'react-icons/rx';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
    useEffect(() => {
        const handleEsc = evt => {
            evt.preventDefault();
            if (evt.code === 'Escape') {
                onClose();
            }
        };
        const handleClick = evt => {
            if (evt.target === document.querySelector('#\\#backdrop')) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEsc);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('keydown', handleEsc);
            window.removeEventListener('click', handleClick);
        };
    }, [onClose]);

    return createPortal(
        <div id="#backdrop" className={css.backdrop}>
            <div className={css.modal}>
                <button
                    type="button"
                    onClick={() => onClose()}
                    className={css.closeBtn}
                >
                    <RxCross2 />
                </button>
                {children}
            </div>
        </div>,
        modalRoot
    );
};

Modal.propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.element,
};
