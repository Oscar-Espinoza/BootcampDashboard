import styled from "styled-components";

type Status = {
  number: number
}

export const StylePublish = styled.div<Status>`
  border-radius: 12px;
  width: 100%;
  height: 28px;
  max-width: 120px;
  font-size: 16px;
  font-weight: 600;
  padding: 12px;
  display: flex;
  line-height: 21px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  color: #6229FF;
  opacity: ${(status: Status) => status.number === 1 ? 1 : 0.22};
  cursor: ${(status: Status) => status.number === 1 ? 'pointer' : 'not-allowed'};  
  transition: 0.3s;
  &:hover{
    background-color: rgba(98, 41, 255, 0.22);
  }
`