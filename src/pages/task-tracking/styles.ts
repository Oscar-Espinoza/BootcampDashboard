import styled from "styled-components";

export const Content = styled.div`
  margin-top: 20px;
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Cards = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  gap: 10rem;
`

export const LogoCard = styled.div`
  height: 300px;
  width: 250px;
  background: #fff;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

export const ChallengeCard = styled.div`
  width: 450px;
  height: 450px;
  background: #fff;
  display: flex;
  flex-direction: column;
`

export const TasksSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`
export const TasksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 30px;
`

export const StatusContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 307px;
  max-height: 430px;
  border-radius: 15px;
  border: 2px solid ${({theme}) => theme.colors.purple};
  background-color: rgba(98,41,255,22%);
  display: flex;
  padding: 1em;
  color: #fff;
  flex-direction: column;
  align-items: center;
`

export const StatusTitle = styled.h2`
  text-align: left;
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 1px solid #fff;
`

export const TasksList = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  min-height: 310px;
  gap: 10px;
`

export const TaskContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding: 1em;
  cursor: grab;
`

export const TaskTitle = styled.h3`
  color: #000;
  margin:0;
  font-size: 16px;
`

