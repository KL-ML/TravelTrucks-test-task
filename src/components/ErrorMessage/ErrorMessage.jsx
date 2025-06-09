import css from './ErrorMessage.module.css';

export default function ErrorMessage({ text }) {
  return (
    <div className={css.wrap}>
      <p>{text}</p>
    </div>
  );
}
