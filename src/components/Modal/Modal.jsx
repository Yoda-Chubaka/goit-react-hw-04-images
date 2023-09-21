/* eslint-disable react-hooks/exhaustive-deps */
import { ModalStyle, Overlay } from "./Modal.styled";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import PropTypes from 'prop-types'

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ selectedPhoto: { largeImageURL, tags }, onClose }) => {
    useEffect(() => {
        window.addEventListener('keydown', onEscapeCloseModal);
        return () => {
            window.removeEventListener('keydown', onEscapeCloseModal);
        };
    }, [onEscapeCloseModal]);
    
    function onEscapeCloseModal(event) {
        if (event.code === 'Escape') {
            onClose();
        };
    };

    const onClickOverlay = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        };
    };

        return createPortal(
            <Overlay onClick={onClickOverlay}>
                <ModalStyle>
                    <img src={largeImageURL} alt={tags} />
                </ModalStyle>
            </Overlay>,
            modalRoot);
    }

Modal.propTypes = {
        onClose: PropTypes.func.isRequired,
        selectedPhoto: PropTypes.shape({
            id: PropTypes.number.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        }).isRequired,
    }
