import React, { useState, useEffect } from "react";
import { Container, PrincipalTitle } from "@/components/AboutUs/style";
import { Cards, ChallengeCard, Content, LogoCard, StatusContainer, StatusTitle, TasksContainer, TasksList, TasksSection, TaskContainer, TaskTitle } from "./styles";
import { Task } from "@/models/types";

const initStateChallenge = {
  name: "Crypto challenge",
  description: "Crypto challenge has a lot of important things",
  level: "Hard",
  tasks: [
    {
      "id": "1",
      "name": "Task 1",
      "description": "something",
      "status": "Backlog"
    },
    {
      "id": "2",
      "name": "Task 2",
      "description": "somethingx2",
      "status": "In Progress"
    },
    {
      "id": "3",
      "name": "Task 3",
      "description": "somethingx3",
      "status": "Done"
    },
    {
      "id": "4",
      "name": "Task 4",
      "description": "somethingx4",
      "status": "Approved"
    }
  ],
};

const initStatus = {
  Backlog: [],
  'In Progress': [],
  Done: [],
  Approved: [],
}

const TaskCard = ({ task }) => (
  <TaskContainer
    draggable="true"
    onDragStart={(e) => {
      e.dataTransfer.setData("id", task.id);
      e.dataTransfer.setData("currentStatus", task.status);
    }}
    onDragEnd={(ev) => {
      ev.target.style.opacity = "1";
    }}
    style={{ opacity: "1" }}
  >
    <TaskTitle>{task.name}</TaskTitle>
  </TaskContainer>
)

function TaskTracking() {
  const [challenge, setChallenge] = useState(initStateChallenge);

  const [taskStatus, setTaskStatus] = useState(initStatus);

  useEffect(() => {
    let newTaskStatus = { ...initStatus };
    challenge.tasks.forEach(task => {
      newTaskStatus[task.status] = [...newTaskStatus[task.status], task];
    });
    setTaskStatus(newTaskStatus);
  }, [challenge]);

  const handleDrop = (e) => {
    e.preventDefault();
    
    const id = e.dataTransfer.getData("id");
    const currentStatus = e.dataTransfer.getData("currentStatus");
    
    let target = e.target;
    while (target != null && !Object.keys(initStatus).includes(target.id)) {
      target = target.parentElement;
    }
    
    if (target != null && target.id !== currentStatus) {       
      const taskIndex = challenge.tasks.findIndex((task) => task.id.toString() === id);
      const newTaskStatus = target.id;
      const newChallenge = {...challenge };  
      newChallenge.tasks[taskIndex].status = newTaskStatus;
      setChallenge(newChallenge);
    }  
  }

  return (
    <Container>
      <PrincipalTitle>Challenge</PrincipalTitle>
      <Content>
        <Cards>
          <LogoCard></LogoCard>
          <ChallengeCard></ChallengeCard>
        </Cards>

        <TasksSection>
          <PrincipalTitle>Tasks</PrincipalTitle>
          <TasksContainer>
            {Object.keys(taskStatus).map((status) => (
              <StatusContainer
                key={status}
                id={status}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}>
                <StatusTitle>{status}</StatusTitle>
                <TasksList>
                  {taskStatus[status].map((task: Task) => (
                    <TaskCard key={task.name} task={task} />
                  ))}
                </TasksList>
              </StatusContainer>
            ))}
          </TasksContainer>
        </TasksSection>
      </Content>
    </Container>
  );
}

export default TaskTracking;
