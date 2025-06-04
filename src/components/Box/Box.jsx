import PropTypes from 'prop-types';
import css from './Box.module.css';
import clsx from 'clsx';

// eslint-disable-next-line no-unused-vars
export default function Box({ children, variant, tag: Tag = 'div' }) {
  return <Tag className={clsx(css.box, css[variant])}>{children}</Tag>;
}

Box.PropTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
  tag: PropTypes.string,
};
