import styled from "styled-components";


export const StyleTaskForm = styled.div`
  height: 100%;
`

export const FlexFieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  border: none;
`

export const StyleForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 2em 1em 1em 1em;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  flex: 1;
`

export const StyleInput = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  font-size: 18px;
  line-height: 28px;
  &:focus{
    outline: none;
  }
`
export const StyleTextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid #000;
  width: 83%;
  font-size: 18px;
  line-height: 28px;
  &:focus{
    outline: none;
  }
`

export const FlexButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const StyleButton = styled.button`
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
  color: #6229FF;
  background-color: rgba(98, 41, 255, 0.22);
  cursor: pointer;  
  transition: 0.3s;
  &:hover{
    background-color: ${({theme}) => theme.colors.purple_light};
  }
`

export const StyleTasks = styled.div`
  height: 100%;
  width: 100%;
  margin: 1em 0;
  
  p{
      text-align:left;
      font-size: 18px;
  }
`

export const FlexTasks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const StyleIcon = styled.div`
  margin-left: 5px;
  cursor: pointer;
`

export const NameAndLevel = styled.div`
  display: flex;
  gap: 20px;
`

export const Select = styled.select`
  width: 100%
`;

export const Label = styled.label`
  width: 83%
`;