import PropTypes from 'prop-types';

import clsx from 'clsx';
import css from './Button.module.css';

export default function Button({ text, variant, btnType, disabled, handleClick }) {
  return (
    <>
      <button
        disabled={disabled}
        type={btnType}
        className={clsx(css.button, css[variant])}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
}

Button.PropTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
  btnType: PropTypes.string.isRequired,
};
