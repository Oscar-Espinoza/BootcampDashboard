import { Percentage } from "@/models/types";
import React from "react";
import { StylePercentage } from "./styles";

const Percentage = ({ status, number }: Percentage) => {
  return <StylePercentage status={status}>{number}%</StylePercentage>;
};

export default Percentage;
