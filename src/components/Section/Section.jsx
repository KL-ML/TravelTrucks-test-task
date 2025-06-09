import css from './Section.module.css';
import clsx from 'clsx';

export default function Section({ children, variant }) {
  return <div className={clsx(css.section, css[variant])}>{children}</div>;
}

