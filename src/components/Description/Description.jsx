import css from './Description.module.css';

export default function Description({ children, text }) {
  return (
    <>
      <p className={css.description}>
        {children}
        {text}
      </p>
    </>
  );
}
