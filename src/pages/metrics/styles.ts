import styled from "styled-components";

type Cols = {
    left: boolean
}

export const FlexMetrics = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;

    @media screen and (max-width: 1000px) {
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`

export const FlexCols = styled.div<Cols>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-right: ${({left}) => left ? '10px' : 'none'};
`
export const MetricsModal = styled.dialog`
  border-radius: 18px;
  border: none;
  width: 28%;
  height: 80%;

  &::backdrop {
    background-color: #000;
    opacity: 0.7;
  }
`;

export const FlexClose = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const StyleButtonClose = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
  svg{
    fill: red;
  }
`