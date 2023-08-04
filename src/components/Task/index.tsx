import { Task } from "@/models/types";
import React from "react";
import Edit from "../Edit";
import { FlexTask, StyleTask } from "./styles";

const Task = ({ name, description }: Task) => {
  return (
    <StyleTask>
      <FlexTask>
        <h3>{name}</h3>
        <Edit onClick={() => {}}/>
      </FlexTask>
      <p>{description}</p>
    </StyleTask>
  );
};

export default Task;
