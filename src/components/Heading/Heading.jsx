import clsx from 'clsx';
import css from './Heading.module.css';


export default function Heading({
  children,
  variant,
  // eslint-disable-next-line no-unused-vars
  tag: Tag = 'h1',
  underlined,
}) {
  return (
    <>
      <Tag
        className={clsx(
          css.heading,
          css[variant],
          underlined && css.underlined
        )}
      >
        {children}
      </Tag>
    </>
  );
}
