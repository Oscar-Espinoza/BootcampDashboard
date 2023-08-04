import { Percentage } from "@/models/types";
import styled from "styled-components";

type PercentageProps = {
  status: Percentage["status"];
};

const colors = {
  just_starting: {
    border: `#B53C34`,
    inside: `#FBD9D7`,
  },
  in_progress: {
    border: `#B58134`,
    inside: `#FBEDD7`,
  },
  close_to_finish: {
    border: `#D4CD20`,
    inside: `#FBFAD7`,
  },
  completed: {
    border: `#34B53A`,
    inside: `#E2FBD7`,
  },
  published: {
    border: `#34B53A`,
    inside: `#E2FBD7`,
  },
};

export const StylePercentage = styled.div<PercentageProps>`
  border-radius: 8px;
  height: 28px;
  font-size: 18px;
  font-weight: 400;
  padding: 12px;
  line-height: 21px;
  width: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.grey_light};
  border: 1px solid ${({ theme }) => theme.colors.grey_light};
  color: black;
`;

