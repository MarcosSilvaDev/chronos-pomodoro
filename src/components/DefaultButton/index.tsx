import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  // status do botão
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function DefalutButton({
  color = 'green',
  icon,
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
