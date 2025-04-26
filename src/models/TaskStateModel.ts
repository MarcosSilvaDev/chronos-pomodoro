import { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number; // contador => countDown(componente)
  formattedSecondsRemaining: string; // conversão do secondsRemaining em string
  activeTask: TaskModel;
  currentCycle: number | null; // 1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
