import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { TaskModel } from '../../models/TaskModel';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  const { state, setState } = useTaskContext();
  // useRef previne renderizaçoes desnecesserias
  const taskNameInput = useRef<HTMLInputElement>(null);

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle ?? 0);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current == null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da task');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle, // conferir
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleInterruptTask() {
    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map(task => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          /// usa-se useRef quando não importa o que o usuario digita
          ref={taskNameInput} // manda o input para o "taskNameInput"
          disabled={!!state.activeTask} // for diferente de null
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      {(state.currentCycle ?? 0) > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      {/* lógica de troca de botão ao mudar o status do activeTask */}
      <div className='formRow'>
        {!state.activeTask && ( //se activeTask  = null
          <DefaultButton
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
            key='botao_submit'
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            aria-label='Parar tarefa'
            title='Parar tarefa'
            type='button'
            color='red'
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
            key='botao_button' //evita o submit
          />
        )}
      </div>
    </form>
  );
}
