import PropTypes from 'prop-types';

import clsx from 'clsx';
import css from './Heading.module.css';

// eslint-disable-next-line no-unused-vars
export default function Heading({ children, variant, tag: Tag = 'h1', underlined }) {
  return (
    <>
      <Tag
        className={clsx(
          css.heading,
          css[variant],
          underlined && css.underlined,
        )}
      >
        {children}
      </Tag>
    </>
  );
}

Heading.PropTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
  tag: PropTypes.string,
};
