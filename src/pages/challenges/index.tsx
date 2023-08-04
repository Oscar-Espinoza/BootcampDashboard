import React, { useState, ReactNode } from "react";
import TrashCan from "@/components/TrashCan";
import { EditTasksForm } from "@/components/EditTasksForm";

import {
  Container,
  FlexTdInside,
  PrincipalTitle,
  StyleDashboard,
  StyleTable,
  StyleTr,
  StyledSelect,
} from "@/components/Dashboard/styles";
import {
  FlexTitle,
  StyleAddChallenge,
  ViewAllTasks,
} from "./styles";

import Modal from "@/components/Modal";
import ChallengeForm from "@/components/ChallengeForm";
import {
  Challenge,
  HandleTaskUpdateFunction,
  HandleTaskRemoveFunction,
  HandleAddTaskFunction
} from "@/models/types";
import EditableTextInput from "@/components/EditableTextInput";

const challengesList: Challenge[] =[
  {
    name: "First challenge",
    description: "Crypto challenge has a lot of important things",
    level: "Easy",
    tasks: [
      {
        name: 'First challenge task 1',
        description: 'First challenge task 1 description',
      },
    ],
  },
  {
    name: "Second challenge",
    description: "Crypto challenge has a lot of important things",
    level: "Medium",
    tasks: [
      {
        name: 'Second challenge task 1',
        description: '',
      },
      {
        name: 'Second challenge task 2',
        description: '',
      },
    ],
  },
  {
    name: "Third challenge",
    description: "Crypto challenge has a lot of important things",
    level: "Hard",
    tasks: [
      {
        name: 'Third challenge task 1',
        description: '',
      },
      {
        name: 'Third challenge task2',
        description: '',
      },
      {
        name: 'Third challenge task 3',
        description: '',
      },
    ],
  },
];

const tasksLevels = ['Easy', 'Medium', 'Hard'];

const Challenges = () => {
  const [challenges, setChallenges] = useState(challengesList);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddChallenge = (newChallenge: Challenge) => {
    const newChallenges = [...challenges];
    newChallenges.push(newChallenge);
    setChallenges(newChallenges);
  }

  const handleSave = (key: 'name' | 'description', value: string, index: number) => {
    const newChallenges: Challenge[] = [...challenges];
    newChallenges[index][key] = value;
    setChallenges(newChallenges);
  };

  const handleRemove = (name: string) => {
    const newChallenges = challenges.filter((challenge) => challenge.name != name);
    setChallenges(newChallenges);
  }

  const handleAddTask: HandleAddTaskFunction = (challenge) => {
    const updatedChallenge = { ...challenge };
    updatedChallenge.tasks.push({
      name: '', description: '' });
    const updatedChallenges = [...challenges];
    const challengeIndex = updatedChallenges.findIndex((c) => c.name === updatedChallenge.name);
    updatedChallenges[challengeIndex] = updatedChallenge;
    setChallenges(updatedChallenges);
    setModalContent(() => (
      <EditTasksForm
        handleTaskUpdate={handleTaskUpdate}
        challenge={challenge}
        handleTaskRemove={handleTaskRemove}
        handleAddTask={handleAddTask}
      />
    ));
  }

  const handleTaskUpdate: HandleTaskUpdateFunction = (challenge, taskIndex, field, value) => {
    const updatedChallenge = { ...challenge };
    updatedChallenge.tasks[taskIndex][field] = value;
    const updatedChallenges = [...challenges];
    const challengeIndex = updatedChallenges.findIndex((c) => c.name === updatedChallenge.name);
    updatedChallenges[challengeIndex] = updatedChallenge;
    setChallenges(updatedChallenges);
  };

  const handleTaskRemove: HandleTaskRemoveFunction = (challenge, taskIndex) => {
    const newTasksList = challenge.tasks.filter((task, index) => index !== taskIndex);
    challenge.tasks = newTasksList;
    setModalContent(() => (
      <EditTasksForm
        handleTaskUpdate={handleTaskUpdate}
        challenge={challenge}
        handleTaskRemove={handleTaskRemove}
        handleAddTask={handleAddTask}
      />
    ));
  };

  return (
    <>
      <Container>
        <FlexTitle>
          <PrincipalTitle>Challenges</PrincipalTitle>
          <StyleAddChallenge onClick={() => {
            handleOpenModal();
            setModalContent(
              <ChallengeForm
                setModalContent={setModalContent}
                handleAddChallenge={handleAddChallenge}
                handleCloseModal={handleCloseModal}
              />
            );
          }}>
            Add Challenge +
          </StyleAddChallenge>
        </FlexTitle>
        <StyleDashboard>
          <StyleTable>
            <thead>
              <StyleTr bold={true}>
                <th style={{color: '#6229FF'}}>Title</th>
                <th style={{color: '#6229FF'}}>Description</th>
                <th style={{color: '#6229FF'}}>Level</th>
                <th style={{color: '#6229FF'}}>Tasks</th>
              </StyleTr>
            </thead>
            <tbody>
              {challenges.map((challenge, index) => {
              return (
                <StyleTr key={index}>
                <td>
                  <FlexTdInside boolean={true}>
                    <EditableTextInput
                      name="name"
                      defaultValue={challenge.name}
                      onChange={(value) => handleSave("name", value, index)}
                    />                    
                  </FlexTdInside>
                </td>
                <td title={challenge.description}>
                  <FlexTdInside boolean={true}>
                    <EditableTextInput
                      name="description"
                      defaultValue={challenge.description}
                      onChange={(value) => handleSave("description", value, index)}
                    />
                  </FlexTdInside>
                </td>
                <td>
                  <FlexTdInside boolean={true}>
                    <StyledSelect
                      defaultValue={challenge.level}
                    >
                      {tasksLevels.map((taskLevel) => (
                        <option key={taskLevel} value={taskLevel}>
                          {taskLevel}
                        </option>
                      ))}
                    </StyledSelect>
                  </FlexTdInside>
                </td>
                <td>
                  <FlexTdInside boolean={true}>
                    <ViewAllTasks onClick={() => {
                      handleOpenModal();
                      setModalContent(<EditTasksForm
                        handleTaskUpdate={handleTaskUpdate}
                        challenge={challenge}
                        handleTaskRemove={handleTaskRemove}
                        handleAddTask={handleAddTask}
                      />)
                    }}>View All</ViewAllTasks>
                  </FlexTdInside>
                </td>
                <td>
                  <TrashCan onClick={() => handleRemove(challenge.name)}/>
                </td>
              </StyleTr>
              )})}
            </tbody>
          </StyleTable>
        </StyleDashboard>
      </Container>

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        {modalContent}
      </Modal>

    </>
  );
};

export default Challenges;
