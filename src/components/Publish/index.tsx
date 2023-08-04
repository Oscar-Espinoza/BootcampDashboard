import React from "react";
import { StylePublish } from "./styles";

type Status = {
  number: number;
};

const Percentage = ({ number }: Status) => (
  number === 0 
  ? <StylePublish number={0}>Publish</StylePublish>
  : <StylePublish number={1}>Publish</StylePublish>
);

export default Percentage;
