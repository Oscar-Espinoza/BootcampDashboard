import Link from "next/link";
import { HTMLAttributes } from "react";
import styled from "styled-components";

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  bold?: boolean;
}

type TdBoolean = {
  boolean: boolean;
  status?: "completed" | "just_starting" | "close_to_finish" | "in_progress";
};

export const Container = styled.div`
  margin: 8px 0;
  padding-inline: 32px;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const StyleDashboard = styled.div`
  border-radius: 8px;
  margin-top: 10px;
  background-color: #fff;
  padding: 20px;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey_light};
`;

export const StyleTable = styled.table`
  border-collapse: collapse;
  table-layout: auto;
  width: 100%;
`;

export const StyleHoverTd = styled.td`
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.purple};
    cursor: pointer;
  }
`;

export const RegularTd = styled.td`
  text-align: left !important;
  padding: 0;
`;

export const PrincipalTitle = styled.h3`
  color: black;
  font-size: 30px;
  margin: 0;
  margin-top: 24px;
  text-align: left;
  font-family: "roboto";
  font-weight: 500;
`;

export const FlexTdInside = styled.div<TdBoolean>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ boolean }) =>
    boolean &&
    `
    > div {
      margin-left: 5px;
    }
  `}
  opacity: ${({ status }) => (status === "completed" ? 1 : 0.22)};
`;

FlexTdInside.defaultProps = {
  status: "completed",
};

export const FlexPublish = styled.td``;

export const StyleTr = styled.tr<TableRowProps>`
  border-bottom: 1px solid #d9d9d9;
  height: 50px;
  ${({ bold }) =>
    bold &&
    `
        font-weight: bolder;
    `}
`;

export const DashTh = styled.th`
  color: #6229ff;
  text-align: left !important;
`;

export const StyledSelect = styled.select`
  border: none;
  font-size: 1em;
  color: #333;
  background-color: #fff;
  min-width: 60px;
`;

export const StyledSelectStatus = styled.select`
  border: none;
  padding: 5px;
  border-radius: 5px;
  font-size: 1em;
  color: #333;
  background-color: #fff;
  width: 50px;
  margin-left: 5px;
  display: inline-block;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  alig-items: center;
  margin-bottom: 10px;
  margin-top: 25px;
  width: 100%;
`;

export const UserSearchBar = styled.input`
  width: 180px;
  height: 40px;
  border-radius: 8px;
  padding: 7px 10px;
  border: 1px solid #d9d9d9;
  font-size: 16px;
`;

export const DeleteAllButton = styled.button`
  background-color: #fbd4d4;
  height: 40px;
  color: #b30000;
  padding: 0 25px;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-left: 10px;

  &:hover {
    background-color: #b30000;
    color: #fff;
  }
`;

export const StyledTh = styled.th`
  display: flex;
  height: 50px;
  align-items: center;
  color: #6229ff;
`;

export const UserLink = styled(Link)`
  text-decoration: none;
  transition: 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.purple};
    cursor: pointer;
  }
`;

//Feedback Form styles

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  margin: 0 auto;
  height: 100%;
  min-height: 400px;
  border-radius: 8px;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 16px;
  color: #333;
  text-align: left;
`;

export const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
  min-width: 500px;
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  width: 100px;
`;

export const RadioInput = styled.input`
  margin-right: 8px;
  transform: scale(1.2);
`;

export const SubmitButton = styled.button`
  align-self: flex-end;
  border-radius: 8px;
  text-align: center;
  border: none;
  height: 48px;
  width: 200px;
  font-size: 18px;
  font-weight: 600;
  padding: 12px;
  line-height: 21px;
  margin-top: 25px;
  color: #6229ff;
  background-color: rgba(98, 41, 255, 0.22);
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.purple_light};
  }
`;
