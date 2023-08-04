import styled from "styled-components";


export const Container = styled.div`
  padding: 20px 0;
  padding-inline: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding:  0 70px;
  margin-bottom: 20px;
`;


export const PrincipalTitle = styled.h3`
  color: black;
  font-size: 30px;
  margin: 0;
  margin-top: 16px;
  text-align: left;
  font-family: "roboto";
  font-weight: 500;
`;

export const SubCategory = styled.h4`
  color: black;
  font-size: 34px;
  margin: 0;
  margin-bottom: 16px;
  text-align: center;
  margin-top: 50px;
  font-family: "roboto";
  font-weight: 500;
`;

export const Subtitle = styled.h4`
  color: ${({ theme }) => theme.colors.purple};
  font-size: 22px;
  text-align: left;
`;

export const Description = styled.p`
  text-align: left;
  margin: 0px;
`;