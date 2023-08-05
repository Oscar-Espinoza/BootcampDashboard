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
          onClick={() => router.push("/dashboard")}
          type="button"
          active={router.pathname === "/dashboard"}
          isOpen={isOpen}
        >
          <FaUsers size={24} /> {isOpen ? "Dashboard" : null}
        </Text>

        <Text
          onClick={() => router.push("/metrics")}
          type="button"
          active={router.pathname === "/metrics"}
          isOpen={isOpen}
        >
          <FaChartBar size={24} /> {isOpen ? "Metrics" : ""}
        </Text>
        <Text
          onClick={() => router.push("/challenges")}
          type="button"
          active={router.pathname === "/challenges"}
          isOpen={isOpen}
        >
          <FaSortAmountUp size={24} /> {isOpen ? "Challenges" : ""}
        </Text>
        <Text
          onClick={() => router.push("/bootcamps")}
          type="button"
          active={router.pathname === "/bootcamps"}
          isOpen={isOpen}
        >
          <GiBookCover size={24} /> {isOpen ? "Bootcamp" : ""}
        </Text>
        <Text
          onClick={() => router.push("/task-tracking")}
          type="button"
          active={router.pathname === "/task-tracking"}
          isOpen={isOpen}
        >
          <FaRegEye size={24} /> {isOpen ? "Task tracking" : ""}
        </Text>
        <Text
          onClick={() => router.push("/about-us")}
          type="button"
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
