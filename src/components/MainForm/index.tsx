import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefalutButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef, useState } from 'react';

export function MainForm() {
  const [taskName, setTaskName] = useState('');
  // useRef previne renderizaçoes
  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          value={taskName}
          onChange={e => setTaskName(e.target.value)} //controla o input
          ref={taskNameInput} // manda o input para o "taskNameInput"
        />
      </div>

      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefalutButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
