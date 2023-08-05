import styled from "styled-components";
import Link from "next/link";

type LinkProps = {
  active: false | true;
  isOpen: boolean;
};

type SidebarProps = {
  isOpen: boolean;
};

export const SidebarStyle = styled.div<SidebarProps>`
  width: ${({ isOpen }) => (isOpen ? "220px" : "64px")};
  background-color: ${({ theme }) => theme.colors.purple};
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s ease-in-out;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Text = styled.button<LinkProps>`
  margin-top: 50px;
  display: flex;
  cursor: pointer;
  gap: 5px;
  align-items: center;
  justify-content: ${({ isOpen }) => (isOpen ? "start" : "center")};
  color: #000;
  text-decoration: none;
  font-weight: 500;
  color: ${({ active }) => (active ? "black" : "white")};
  padding-left: ${({ isOpen }) => (isOpen ? "32px" : "0")};
  background: transparent;
  border: none;
`;

export const SelectedText = styled(Link)`
  margin-top: 50px;
  color: #6229ff;
  font-weight: bolder;
  text-decoration: none;
`;

export const SidebarButton = styled.button`
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.purple_light};
  background: ${({ theme }) => theme.colors.white};
  height: 45px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 600;
  cursor: pointer;
`;
