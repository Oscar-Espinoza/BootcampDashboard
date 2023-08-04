import React, { useState, ReactNode } from 'react';
import { Challenge } from "@/models/types";
import {
  StyleForm,
  StyleInput,
  StyleTextArea,
  NameAndLevel,
  StyleButton
} from './styles';
import { EditTasksForm } from '../EditTasksForm';

interface ChallengeFormProps {
  setModalContent: (content: ReactNode) => void;
  handleAddChallenge: (challenge: Challenge) => void;
  handleCloseModal: () => void;
}

const ChallengeForm: React.FC<ChallengeFormProps> = ({ setModalContent, handleAddChallenge, handleCloseModal }) => {
  const [formData, setFormData] = useState<Challenge>({ name: '', description: '', level: 'Easy', tasks: [] });
  const [showTasksForm, setShowTasksForm] = useState(false);

  const handleTaskUpdate = (challenge: Challenge, index: number, field: 'name' | 'description', value: string) => {
    const newTasks = [...challenge.tasks];
    newTasks[index][field] = value;
    setFormData({...challenge, tasks: newTasks });
  };

  const handleTaskRemove = (challenge: Challenge, taskIndex: number) => {
    const updatedChallenge = {
      ...challenge,
      tasks: challenge.tasks.filter((_, i) => i!== taskIndex)
    };
    setFormData(updatedChallenge);
  };

  const handleAddTask = (challenge: Challenge) => {
    const updatedChallenge = {
      ...challenge,
      tasks: [...challenge.tasks, {name: '', description: ''}]
    }
    setFormData(updatedChallenge);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddChallenge({ ...formData, tasks: [] });
    handleCloseModal();
  };

  if (showTasksForm) {
    return (
      <EditTasksForm
        challenge={formData}
        handleTaskUpdate={handleTaskUpdate}
        handleTaskRemove={handleTaskRemove}
        handleAddTask={handleAddTask}
        handleBackToChallengeForm={() => setShowTasksForm(false)}
      />
    );
  }

  return (
    <StyleForm onSubmit={handleSubmit}>
      <NameAndLevel>
        <StyleInput
          title='name'
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Challenge name"
          required
        />
 
        <label htmlFor="level" style={{display: 'flex', flexDirection: 'column'}}>Level
          <select name="level" id="level" value={formData.level} onChange={handleChange}>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
          </select>
        </label>
      </NameAndLevel>

      <StyleTextArea
        title='description'
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Challenge description"
      />

      <button type="button" onClick={() => setShowTasksForm(true)}>Edit tasks</button>
      <StyleButton type="submit">Add</StyleButton>
    </StyleForm>
  );
};

export default ChallengeForm;
