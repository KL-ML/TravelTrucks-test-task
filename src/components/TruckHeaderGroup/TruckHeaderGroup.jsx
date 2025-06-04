import clsx from 'clsx';
import css from './TruckHeaderGroup.module.css';
import Heading from '../Heading/Heading';

export default function TruckHeaderGroup({ variant }) {
  return (
    <>
      <div className={clsx(css.cardHeaderGroup, css[variant])}>
        <div>
          <Heading tag="h2" variant="cardH2">
            Mavericks
          </Heading>
          <ul className={css.cardDetails}>
            <li>
              <p>4.4(2 Reviews)</p>
            </li>
            <li>
              <p>Kyiv, Ukraine</p>
            </li>
          </ul>
        </div>
        <Heading tag="h3" variant="cardH2">
          €8000.00
        </Heading>
      </div>
    </>
  );
}
