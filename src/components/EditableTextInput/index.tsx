import React, { useRef, ChangeEvent } from 'react';

import { StyledInput as Input } from './styles';
import Edit from '../Edit';

interface InputProps {
  defaultValue: string;
  name: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const EditableTextInput: React.FC<InputProps> = ({ defaultValue, onChange, name, placeholder }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => (event.key === "Enter" && inputRef.current) && inputRef.current?.blur()
  

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      const inputValueLength = inputRef.current.value.length;
      inputRef.current.setSelectionRange(inputValueLength, inputValueLength);
    }
  }

  return (
    <>
      <Input
        type="text"
        name={name}
        defaultValue={defaultValue}
        ref={inputRef}
        onKeyDown={handleKeyDown}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <Edit onClick={handleFocus} />
    </>
  );
};

export default EditableTextInput;
