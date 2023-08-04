import React, { useState, useRef, useEffect} from "react";
import { Container, PrincipalTitle } from "@/components/Dashboard/styles";
import MetricContainer from "@/components/Metrics";
import {
  FlexCols,
  FlexMetrics,
} from "./styles";
import { MetricInfo } from "@/models/types";
import MetricsInfo from "@/components/MetricsInfo";
import Modal from "@/components/Modal";

const col1 = [
  {
    id: 1,
    data: " Developers just starting",
    number: 12,
    status: "just_starting",
  },
  {
    id: 2,
    data: "Developers in progress",
    number: 15,
    status: "in_progress",
  },
  {
    id: 3,
    data: "Developers close to finish",
    number: 8,
    status: "close_to_finish",
  },
  {
    id: 4,
    data: "Developers completed",
    number: 30,
    status: "completed",
  },
] as const;

const col2 = [
  {
    id: 1,
    data: "Total developers",
    number: 60,
    status: "devlabs",
  },
  {
    id: 2,
    data: "Developers with negative feedback",
    number: 5,
    status: "devlabs",
  },
  {
    id: 3,
    data: "Developers with positive feedback",
    number: 20,
    status: "devlabs",
  },
  {
    id: 4,
    data: "Developers without feedback",
    number: 6,
    status: "devlabs",
  },
] as const;

const Metrics = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMetric, setCurrentMetric] = useState('');

  return (
    <Container>
      <PrincipalTitle>Metrics</PrincipalTitle>
      <FlexMetrics>
        <FlexCols left={true}>
          {col1 &&
            col1.map((metric: MetricInfo) => {
              return (
                <MetricContainer
                  key={metric.data}
                  data={metric.data}
                  number={metric.number}
                  status={metric.status}
                  onClick={() => {
                    setCurrentMetric(metric.data);
                    setIsModalOpen(true);
                  }}
                />
              );
            })}
        </FlexCols>
        <FlexCols left={false}>
          {col2 &&
            col2.map((metric: MetricInfo) => {
              return (
                <MetricContainer
                key={metric.data}
                  data={metric.data}
                  number={metric.number}
                  status={metric.status}
                  onClick={() => {
                    setCurrentMetric(metric.data);
                    setIsModalOpen(true);
                  }}
                />
              );
            })}
        </FlexCols>
      </FlexMetrics>

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <MetricsInfo title={currentMetric} />
      </Modal>
    </Container>
  );
};

export default Metrics;
