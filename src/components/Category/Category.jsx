import css from './Category.module.css';

import clsx from "clsx";

export default function Category({ children, variant, gray }) {
  return (
    <>
      <div className={clsx(css.category, css[variant], gray && css.gray)}>{children}</div>
    </>
  );
}