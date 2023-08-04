import React, { useState } from "react";
import { SidebarStyle, Text, OptionsContainer, SidebarButton } from "./style";
import { useRouter } from "next/router";

import { FaChartBar, FaRegEye, FaSortAmountUp, FaUsers } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();

  return (
    <SidebarStyle isOpen={isOpen}>
      <OptionsContainer>
        <Text
          href="/dashboard"
          active={router.pathname === "/dashboard"}
          isOpen={isOpen}
        >
          <FaUsers size={24} /> {isOpen ? "Dashboard" : ""}
        </Text>
        <Text
          href="/metrics"
          active={router.pathname === "/metrics"}
          isOpen={isOpen}
        >
          <FaChartBar size={24} /> {isOpen ? "Metrics" : ""}
        </Text>
        <Text
          href="/challenges"
          active={router.pathname === "/challenges"}
          isOpen={isOpen}
        >
          <FaSortAmountUp size={24} /> {isOpen ? "Challenges" : ""}
        </Text>
        <Text
          href="/bootcamps"
          active={router.pathname === "/bootcamps"}
          isOpen={isOpen}
        >
          <GiBookCover size={24} /> {isOpen ? "Bootcamp" : ""}
        </Text>
        <Text
          href="/task-tracking"
          active={router.pathname === "/task-tracking"}
          isOpen={isOpen}
        >
          <FaRegEye size={24} /> {isOpen ? "Task tracking" : ""}
        </Text>
        <Text
          href="/about-us"
          active={router.pathname === "/about-us"}
          isOpen={isOpen}
        >
          <FcAbout size={24} /> {isOpen ? "About us" : ""}
        </Text>
      </OptionsContainer>
      <SidebarButton onClick={handleSidebar}>
        {isOpen ? "\u2190" : "\u2192"}
      </SidebarButton>
    </SidebarStyle>
  );
};

export default Sidebar;
