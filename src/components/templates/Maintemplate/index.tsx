import { Container } from '../../Container';
import { CountDown } from '../../CountDown';
import { Footer } from '../../Footer';
import { Logo } from '../../Logo';
import { Menu } from '../../Menu';

type MainTemplatesProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplatesProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
