import styles from './styles.module.css';

type HeadingProps = {
  children: React.ReactNode;
};

// desestruturação dentro dos '()'
export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
