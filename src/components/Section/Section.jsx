import PropTypes from 'prop-types';
import css from './Section.module.css';
import clsx from 'clsx';

export default function Section({ children, variant }) {
  return <div className={clsx(css.section, css[variant])} >{children}</div>;
}

Section.PropTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
};
