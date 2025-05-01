import { useState } from 'react';
import { TaskStateModel } from './models/TaskStateModel';
import { Home } from './pages/Home';

import './styles/global.css';
import './styles/theme.css';
import { TaskContext } from './contexts/TaskContext';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

function App() {
  const [state, setState] = useState(initialState);

  return (
    // O provider requer um "value", que é para prover os valores para o contexto de todos
    // os componentes que estão dentro do provider
    <TaskContext.Provider value={{ outracoisa: 124 }}>
      <Home />;
    </TaskContext.Provider>
  );
}

export default App;
