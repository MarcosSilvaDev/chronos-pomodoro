import './styles/global.css';
import './styles/theme.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <section>Menu</section>
      </Container>
    </>
  );
}

export default App;
