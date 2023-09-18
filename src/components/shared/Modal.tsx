import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrapper = styled.div`
  position: fixed;
  width: 35%;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.modal.background};
  padding: 2rem;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem;
  color: ${(props) => props.theme.modal.closeIcon};
`;

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ children, open, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  if (!open || typeof document === "undefined") return null;

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <ModalWrapper>
        {children}
        <CloseButton onClick={onClose}>x</CloseButton>
      </ModalWrapper>
    </>,
    document.body,
  );
};

export default Modal;
