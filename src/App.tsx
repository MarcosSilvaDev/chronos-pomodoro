import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Home } from './pages/Home';

import './styles/global.css';
import './styles/theme.css';
import { MessageContainer } from './components/MessageContainer';

function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <Home />;
      </MessageContainer>
    </TaskContextProvider>
  );
}

export default App;
