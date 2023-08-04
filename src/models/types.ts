export interface Percentage {
    status: 'just_starting' | 'in_progress' | 'close_to_finish' | 'completed';
    number: number;
}

export interface Logo {
    width: number;
    height: number;
}


export interface MetricInfo {
    id?: number;
    status: 'just_starting' | 'in_progress' | 'close_to_finish' | 'completed' | 'devlabs';
    data: string;
    number: number;
}

export type Feedback = {
  description: string;
  accepted: boolean | null;
}

export type User = {
  name: string;
  email: string;
  revisor?: string;
  status: 'completed' | 'just_starting' | 'close_to_finish' | 'in_progress';
  statusPercentage: number;
  challenge: string;
  seats: string;
  feedBack: Feedback;
};

export type Task = {
  name: string,
  description: string,
}

export type Challenge = {
  name: string;
  description: string;
  level: string;
  tasks: Task[];
};

export type HandleTaskUpdateFunction = (
  challenge: Challenge,
  taskIndex: number,
  field: keyof Task,
  value: string,
) => void;

export type HandleTaskRemoveFunction = (
  challenge: Challenge,
  taskIndex: number,
) => void;

export type HandleAddTaskFunction = (
  challenge: Challenge,
) => void;