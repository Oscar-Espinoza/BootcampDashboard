import styled from "styled-components";

export const StyleTask = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: 2px solid ${({theme}) => theme.colors.purple};
  background-color: rgba(98,41,255,22%);
  display: flex;
  padding: 0.5em;
  color: #fff;
  flex-direction: column;
  align-items: center;
`

export const StyleTasksContainer = styled.div`
    display: -webkit-box;
    width: 100%;
    padding: 1em 0;
    min-height: 200px;
    justify-content: space-evenly;
    gap: 10px;
    overflow-x: scroll;
    &::-webkit-scrollbar{
      height: 8px;
    }
    &::-webkit-scrollbar-thumb{
        background: ${({theme}) => theme.colors.purple};
        border-radius: 20px;
        overflow: hidden;
    }
`

export const FlexTask = styled.div`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
`
