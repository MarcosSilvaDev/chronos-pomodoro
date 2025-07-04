import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import './styles/global.css';
import './styles/theme.css';
import { MessageContainer } from './components/MessageContainer';
import { MainRouter } from './routers/MainRouters';

function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
    </TaskContextProvider>
  );
}

export default App;
