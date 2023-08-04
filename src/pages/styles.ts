import styled from "styled-components";

type Main = {
  boolean: boolean;
};

export const StyleMain = styled.main<Main>`
  display: flex;
  flex: 1;
  background-color: #f8f8f8;
  justify-content: flex-start;
  font-family: "Roboto", sans-serif;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  width: 100%;
  overflow-y: ${({ boolean }) => (boolean ? "scroll" : "hidden")};
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.purple};
    border-radius: 20px;
    overflow: hidden;
  }
`;

export const FlexSides = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const StyleLeftSide = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purple};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const StyleRightSide = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Container = styled.div`
  width: 60%;
  padding: 1em;
  height: 80%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyleForm = styled.form`
  height: 100%;
  width: 100%;
  padding: 0 2em;
`;

export const StyleWelcome = styled.h3`
  font-size: 30px;
  font-weight: bold;
`;

export const StyleInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.purple};
  width: 90%;
  height: 38px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 1em 0;
  &:focus {
    outline: none;
  }
`;

export const StyleButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const StyleFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyleTitle = styled.h3`
  text-align: left;
  margin: 0;
  font-size: 36px;
  font-family: "SFUI-Bold";
`;

export const FlexRegister = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const StyleRegister = styled.p`
  font-weight: 600;
  margin-left: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.purple};
`;

export const StyleButton = styled.button`
  border-radius: 12px;
  border: none;
  width: 100%;
  height: 46px;
  max-width: 200px;
  font-size: 18px;
  font-weight: 600;
  padding: 12px;
  display: flex;
  line-height: 21px;
  align-items: center;
  justify-content: center;
  color: #6229ff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: rgba(98, 41, 255, 0.22);
  }
`;
