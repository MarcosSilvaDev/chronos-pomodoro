import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefalutButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { HomeProps } from '../../pages/Home';

export function MainForm({ state }: HomeProps) {
  return (
    <form className='form'>
      <div className='formRow'>
        <DefaultInput labelText='task' id='meuInput' type='text' />
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
