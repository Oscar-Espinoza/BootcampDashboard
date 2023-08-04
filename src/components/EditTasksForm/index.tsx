import React from 'react'

import {
  FlexTdInside,
  StyleTable,
  StyleTr,
} from "@/components/Dashboard/styles";

import {
  Challenge,
  HandleAddTaskFunction,
  HandleTaskRemoveFunction,
  HandleTaskUpdateFunction,
  Task
} from '@/models/types';

import { AddTaskButton, ChallengeTasksList, GoBackButton} from './style';
import TrashCan from '../TrashCan';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import EditableTextInput from '../EditableTextInput';

type EditTasksFormProps = {
  challenge: Challenge;
  handleTaskUpdate: HandleTaskUpdateFunction;
  handleTaskRemove: HandleTaskRemoveFunction;
  handleAddTask: HandleAddTaskFunction;
  handleBackToChallengeForm?: () => void;
}

export const EditTasksForm: React.FC<EditTasksFormProps> = ({ challenge, handleTaskUpdate, handleTaskRemove, handleAddTask, handleBackToChallengeForm }) => {
  const { tasks } = challenge;

  return (
    <ChallengeTasksList>
      {handleBackToChallengeForm && (
        <GoBackButton type='button' onClick={handleBackToChallengeForm}>
          <IoReturnUpBackOutline size={25} />
        </GoBackButton>
      )}
      
      <StyleTable>
        <thead>
          <StyleTr bold={true}>
            <th>Name</th>
            <th>Description</th>
          </StyleTr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <StyleTr key={index}>
            <td>
              <FlexTdInside boolean={true}>
                <EditableTextInput
                  name='name'
                  defaultValue={task.name}
                  onChange={(value) => handleTaskUpdate(challenge, index, 'name', value)}
                  placeholder='Task name...'
                />
              </FlexTdInside>
            </td>
            <td>
              <FlexTdInside boolean={true}>
                <EditableTextInput
                  name='description'
                  defaultValue={task.description}
                  onChange={(value) => handleTaskUpdate(challenge, index, 'description', value)}
                  placeholder='Description...'
                />
              </FlexTdInside>
            </td>
            <td>
              <TrashCan onClick={() => handleTaskRemove(challenge, index)}/>
            </td>
          </StyleTr>
          ))}
        </tbody>
      </StyleTable>
      <AddTaskButton onClick={() => handleAddTask(challenge)}>Add task +</AddTaskButton>
    </ChallengeTasksList>
  )
}
