import React from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { StyleEdit } from "./styles";

type EditProps = {
  onClick: () => void;
}

const Edit:  React.FC<EditProps> = ({ onClick }) => {
  return (
    <StyleEdit onClick={onClick}>
      <HiOutlinePencilAlt size={22} />
    </StyleEdit>
  );
};

export default Edit;
