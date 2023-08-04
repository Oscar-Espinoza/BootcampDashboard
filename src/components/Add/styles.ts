import styled from "styled-components";


export const StyleAdd = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 100%;
    font-weight: 400;
    font-size: 16px;
    height: 20px;
    width: 20px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.grey_light};
    color: black;
    margin-left: 5px;
    &:hover {
        background-color: ${({ theme }) => theme.colors.purple_light};
    }
`