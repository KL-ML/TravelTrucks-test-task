import css from './CatalogList.module.css';

import CatalogItem from '../CatalogItem/CatalogItem';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campersSlice';

export default function CatalogList() {
  const campers = useSelector(selectCampers);
  return (
    <>
      {campers.length > 0 && (
        <div className={css.catalogWrap}>
          <ul className={css.catalogList}>
            {campers.map(camper => (
              <li key={camper.id}>
                <CatalogItem camper={camper} />
              </li>
            ))}
          </ul>

          <Button type="button" text="Load more" variant="outlined" />
        </div>
      )}
    </>
  );
}
