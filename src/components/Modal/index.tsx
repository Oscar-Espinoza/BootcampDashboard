import React, { ReactNode } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { ModalStyle, CloseButton, StyleButtonClose, ModalContent } from "./styles";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
  return (
    <ModalStyle isOpen={isOpen}>
      <ModalContent>
        <CloseButton>
          <StyleButtonClose onClick={() => setIsOpen(false)}>
            <AiFillCloseCircle size={25} />
          </StyleButtonClose>
        </CloseButton>
        {children}
      </ModalContent>
    </ModalStyle>
  );
};

Modal.displayName = "Modal";

export default Modal;

