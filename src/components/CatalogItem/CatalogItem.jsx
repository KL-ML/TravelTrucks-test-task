import css from './CatalogItem.module.css';

import Button from '../Button/Button';
import TruckHeaderGroup from '../TruckHeaderGroup/TruckHeaderGroup';
import Description from '../Description/Description';
import CategoriesList from '../CategoriesList/CategoriesList';
import { Link, useLocation } from 'react-router-dom';
import TruckImg from '../TruckImg/TruckImg';

export default function CatalogItem({camper}) {
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

  return (
    <div className={css.catalogCard}>
      <TruckImg img={gallery[0].thumb} />

      <div className={css.cardDesriptionWrap}>
        <TruckHeaderGroup
          name={name}
          price={price}
          rating={rating}
          location={location}
          reviews={reviews.length}
        />
        {description.length < 56 ? (
          <Description>{description}</Description>
        ) : (
          <Description>{description.slice(0, 56)}...</Description>
        )}
        <CategoriesList
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
        <Link to={`/catalog/${id}`} state={locationState}>
          <Button type="button" text="Show more" variant="filled" />
        </Link>
      </div>
    </div>
  );
}
