import clsx from 'clsx';
import css from './Loader.module.css';

import { MoonLoader } from 'react-spinners';

export default function Loader({variant}) {
  return (
    <div className={clsx(css.loaderWrap, css[variant])}>
      <MoonLoader size={60} color="#e44848" speedMultiplier={1} />
    </div>
  );
}
