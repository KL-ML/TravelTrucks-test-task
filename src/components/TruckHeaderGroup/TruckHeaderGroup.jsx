import clsx from 'clsx';
import css from './TruckHeaderGroup.module.css';
import Heading from '../Heading/Heading';

export default function TruckHeaderGroup({
  variant,
  name,
  price,
  rating,
  location,
  reviews,
}) {
  return (
    <>
      <div className={clsx(css.cardHeaderGroup, css[variant])}>
        <div>
          <Heading tag="h2" variant="cardH2">
            {name}
          </Heading>
          <ul className={css.cardDetails}>
            <li>
              <p>
                {rating}({reviews} Reviews)
              </p>
            </li>
            <li>
              <p>{location}</p>
            </li>
          </ul>
        </div>
        <Heading tag="h3" variant="cardH2">
          €{price},00
        </Heading>
      </div>
    </>
  );
}
