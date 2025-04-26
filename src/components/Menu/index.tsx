import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

// força o sistema a só usar esses dois temas
type AvailableTheme = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableTheme>(() => {
    //lazing initialization
    const storageTheme =
      // força a pegar chave no storage
      (localStorage.getItem('theme') as AvailableTheme) || 'dark';
    return storageTheme;
  });

  //função para mudar o tema
  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevtheme => {
      const nextTheme = prevtheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  // constante para guardar os icones dos temas
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  // hook para evitar efeitos colaterias
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    // guardar o valor de theme no storage, o primeiro prametro é a chave e outro é o valor que vai ser guardado
    localStorage.setItem('theme', theme);

    // limpar o lixo da pagina - nesse component é opcional essa limpeza
    return () => {};
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver Histórico'
        title='Ver Histórico'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
