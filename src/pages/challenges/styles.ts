import styled from "styled-components";


export const FlexTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
`

export const StyleAddChallenge = styled.button`
    border-radius: 8px;
    border: 1px  ;
    width: 100%;
    height: 48px;
    max-width: 200px;
    font-size: 18px;
    font-weight: 600;
    padding: 12px;
    display: flex;
    line-height: 21px;
    margin-top: 25px;
    align-items: center;
    justify-content: center;
    color: #6229FF;
    background-color: rgba(98, 41, 255, 0.22);
    cursor: pointer;  
    transition: 0.3s;
    &:hover{
    background-color: ${({theme}) => theme.colors.purple_light};
    }
`

export const StyledSelect = styled.select`
  border: none;
  padding: 5px;
  border-radius: 5px;
  font-size: 1em;
  color: #333;
  background-color: #fff;
`;

export const ViewAllTasks = styled.span`
    cursor: pointer;
`