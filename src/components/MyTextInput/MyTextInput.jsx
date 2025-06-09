import { useField } from 'formik';
import css from './MyTextInput.module.css';
import clsx from 'clsx';

export default function MyTextInput({
  // eslint-disable-next-line no-unused-vars
  tag: Tag = 'input',
  variant,
  label,
  ...props
}) {
  const [field, meta] = useField(props);
  return (
    <div className={css.inputWrap}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Tag
        className={clsx(css.textInput, css[variant])}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}
