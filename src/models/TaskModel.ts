import { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // quando o timer chega ao final -> podendo ser nula
  interruptDate: number | null; // quando a task for interrompida -> podendo ser nula
  type: keyof TaskStateModel['config']; // referencia aos tipos de cada ciclo(cycles.tsx)
};
