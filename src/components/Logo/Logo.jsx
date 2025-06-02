import { Link } from 'react-router-dom';
import css from './Logo.module.css';

export default function Logo({ logoImgPath }) {
  return (
    <>
      <Link className={css.logo} to="/" aria-label="Site logo">
        <img
          src={logoImgPath}
          alt="Travel trucks logo"
          width="136"
          height="16"
        />
      </Link>
    </>
  );
}
