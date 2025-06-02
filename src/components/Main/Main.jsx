import PropTypes from 'prop-types';
import css from './Main.module.css';

export default function Main({ children }) {
  return (
    <div className={css.container}>
      <div className={css.main}>{children}</div>
    </div>
  );
}

Main.PropTypes = {
  children: PropTypes.any,
};
