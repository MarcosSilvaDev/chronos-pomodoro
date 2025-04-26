import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  // o "?" fala para o ts que essa propriedade é opcional
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {/* condição && valor */}
      {/* se tiver o labelText use esse "<label>"" */}
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input
        className={styles.input}
        id={id}
        type={type}
        {...rest}
        placeholder='Digite algo'
      />
    </>
  );
}
