import { MetricInfo } from "@/models/types";
import styled from "styled-components";

type MetricInfoProps = {
  status: MetricInfo["status"];
};


export const StyleMetric = styled.article<MetricInfoProps>`
  border-radius: 8px;
  display: flex;
  border: 2px solid ${({theme}) => theme.colors.purple_light};
  color: black;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 600px;
  margin-bottom: 8px;
  height: 120px;
  transition: background-color 0.3s, cursor 0.3s box-shadow 0.3s;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.purple_light};
    cursor: pointer;
    border-radius: 16px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
  }
`;

export const StyleMetricInside = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_light};
    border-radius: 16px;
  }
`;

export const StyleNumber = styled.p<MetricInfoProps>`
  font-size: 40px;
  color: black;
  font-weight: bold;
  margin: 0;
`;

export const StyleDataTitle = styled.h3`
  max-width: 200px;
  color: #000;
  text-align: left;
`;

