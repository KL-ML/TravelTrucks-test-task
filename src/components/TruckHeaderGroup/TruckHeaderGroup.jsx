import clsx from 'clsx';
import css from './TruckHeaderGroup.module.css';
import Heading from '../Heading/Heading';
import FavoritesBtn from '../FavoritesBtn/FavoritesBtn';
import iconsPath from '../../images/symbol-defs.svg';

export default function TruckHeaderGroup({
  variant,
  id,
  name,
  price,
  rating,
  location,
  reviews,
  favoritesHandleClick,
  hidden,
}) {
  return (
    <>
      <div className={clsx(css.cardHeaderGroup, css[variant])}>
        <div>
          <Heading tag="h2" variant="cardH2">
            {name}
          </Heading>
          <ul className={css.cardDetails}>
            <li className={css.cardDetailsItem}>
              <svg className={css.starIcon} width="16" height="16">
                <use href={`${iconsPath}#star`}></use>
              </svg>
              <p>
                {rating}({reviews} Reviews)
              </p>
            </li>
            <li className={css.cardDetailsItem}>
              <svg className={css.favorBtnIcon} width="16" height="16">
                <use href={`${iconsPath}#location`}></use>
              </svg>
              <p>{location}</p>
            </li>
          </ul>
        </div>
        <Heading tag="h3" variant="cardH2">
          <div className={css.priceWrap}>
            €{price},00
            {!hidden && (
              <FavoritesBtn
                id={id}
                favoritesHandleClick={favoritesHandleClick}
                iconsPass={iconsPath}
              />
            )}
          </div>
        </Heading>
      </div>
    </>
  );
}
