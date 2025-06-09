import css from './CatalogItem.module.css';

import Button from '../Button/Button';
import TruckHeaderGroup from '../TruckHeaderGroup/TruckHeaderGroup';
import Description from '../Description/Description';
import CategoriesList from '../CategoriesList/CategoriesList';
import { Link, useLocation } from 'react-router-dom';
import TruckImg from '../TruckImg/TruckImg';
import { useDispatch } from 'react-redux';
import { changeFavorites } from '../../redux/favoritesSlice';
import iconsPath from '../../images/symbol-defs.svg';

export default function CatalogItem({ camper }) {
  const locationState = useLocation();
  const {
    id,
    gallery,
    name,
    price,
    rating,
    location,
    reviews,
    description,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = camper;

  const dispatch = useDispatch();
  function favoritesHandleClick() {
    dispatch(changeFavorites(camper));
  }

  return (
    <div className={css.catalogCard}>
      <TruckImg img={gallery[0].thumb} />

      <div className={css.cardDesriptionWrap}>
        <TruckHeaderGroup
          id={id}
          name={name}
          price={price}
          rating={rating}
          location={location}
          reviews={reviews.length}
          favoritesHandleClick={favoritesHandleClick}
          iconsPath={iconsPath}
        />
        {description.length < 56 ? (
          <Description>{description}</Description>
        ) : (
          <Description>{description.slice(0, 56)}...</Description>
        )}
        <CategoriesList
          variant="catalog"
          iconsPath={iconsPath}
          transmission={transmission}
          engine={engine}
          categories={{
            AC,
            bathroom,
            kitchen,
            TV,
            radio,
            refrigerator,
            microwave,
            gas,
            water,
          }}
        />
        <Link
          to={`/catalog/${id}/features`}
          state={locationState}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button btnType="button" text="Show more" variant="filled" />
        </Link>
      </div>
    </div>
  );
}
