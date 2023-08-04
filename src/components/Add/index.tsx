import React from "react";
import { StyleAdd } from "./styles";

interface AddProps {
  disabled: boolean;
  onClick: () => void;
}

const Add: React.FC<AddProps> = ({ disabled, onClick }) => {
  return <StyleAdd onClick={onClick} disabled={disabled}>+</StyleAdd>;
};

export default Add;
