import styled from "styled-components";

export const ChallengeTasksList = styled.div`
  min-width: 1000px;
  min-height: 500px;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TaskOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
`

export const AddTaskButton = styled.button`
  align-self: flex-end;
  border-radius: 8px;
  text-align: center;
  border: none;
  height: 48px;
  max-width: 200px;
  font-size: 18px;
  font-weight: 600;
  padding: 12px;
  line-height: 21px;
  margin-top: 25px;
  color: #6229FF;
  background-color: rgba(98, 41, 255, 0.22);
  cursor: pointer;  
  transition: 0.3s;
  &:hover{
    background-color: ${({theme}) => theme.colors.purple_light};
  }
`

export const GoBackButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  top: 5px;
  left: 5px;
  &:hover {
    color: ${({theme}) => theme.colors.purple};
  }  
`