import { Icon } from "@iconify/react";
import React from "react";

interface onClickProps {
  onClick: () => void;
}

const TrashCan = ({ onClick }: onClickProps) => {
  return (
    <div style={{ cursor: "pointer" }} onClick={onClick}>
      <Icon
        icon="mdi:trash-can-circle"
        color="#6229ff"
        width={28}
        height={28}
      />
    </div>
  );
};

export default TrashCan;
