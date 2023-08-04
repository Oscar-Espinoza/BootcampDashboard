
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 330px;
  border: 2px solid ${({ theme }) => theme.colors.purple_light};
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  background-color: #fff;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_light};
    border: 2px solid ${({ theme }) => theme.colors.purple_light};
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
  }
`;

export const Image = styled.img`
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 20px;
`;

export const Title = styled.h3`
  text-align: center;
  margin: 20px;
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.purple};
`;

export const Subtitle = styled.h4`
  text-align: center;
  margin: 0;
`;