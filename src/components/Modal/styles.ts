import styled from "styled-components";

export const ModalStyle = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.85);
  border: none;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
`

export const StyleButtonClose = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
  svg{
    fill: red;
  }
`
export const ModalContent = styled.div`
  background-color: #fff;
  position: relative;
  border-radius: 10px;
  min-width: 400px;
  min-height: 300px;
  padding: 10px;
`