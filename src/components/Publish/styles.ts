import styled from "styled-components";

type Status = {
  number: number;
};

export const StylePublish = styled.div<Status>`
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #6229ff;
  opacity: ${(status: Status) => (status.number === 1 ? 1 : 0.22)};
  cursor: ${(status: Status) =>
    status.number === 1 ? "pointer" : "not-allowed"};
  transition: 0.3s;
  &:hover {
    background-color: rgba(98, 41, 255, 0.22);
  }
`;
