import React from "react";
import {
  StyleDataTitle,
  StyleMetric,
  StyleMetricInside,
  StyleNumber,
} from "./styles";
import { MetricInfo } from "@/models/types";

type MetricProps = MetricInfo & {
  onClick: () => void,
}

const MetricContainer = ({ data, status, number, onClick }: MetricProps) => {
  return (
    <StyleMetric status={status} onClick={onClick}>
      <StyleMetricInside>
        <StyleDataTitle>{data}</StyleDataTitle>
        <StyleNumber status={status}>{number}</StyleNumber>
      </StyleMetricInside>
    </StyleMetric>
  );
};

export default MetricContainer;
