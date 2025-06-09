import css from './CatalogList.module.css';

import CatalogItem from '../CatalogItem/CatalogItem';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campersSlice';
import { useEffect, useState } from 'react';
import { divideArray } from '../../helpers/divideArray';

const PER_PAGE = 4;

export default function CatalogList() {
  const campers = useSelector(selectCampers);
  const [pagedCampers, setPagedCampers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [dividedArrayOfCampers, setDividedArrayOfCampers] = useState([]);

  useEffect(() => {
    if (!campers || campers.length === 0) return;
    setPage(1);
    setDividedArrayOfCampers(divideArray(campers.items, PER_PAGE));
  }, [campers]);

  useEffect(() => {
    setTotalPages(dividedArrayOfCampers.length);
    if (totalPages >= page) {
      setPagedCampers(prev =>
        page === 1
          ? dividedArrayOfCampers[0]
          : [...prev, ...dividedArrayOfCampers[page - 1]]
      );
    }
  }, [page, totalPages, dividedArrayOfCampers]);

  function showMoreFunc() {
    setPage(page + 1);
  }

  return (
    <>
      {campers && campers.length !== 0 && (
        <div className={css.catalogWrap}>
          <ul className={css.catalogList}>
            {pagedCampers.map(camper => (
              <li key={camper.id}>
                <CatalogItem camper={camper} />
              </li>
            ))}
          </ul>

          {totalPages > page && (
            <Button
              btnType="button"
              text="Load more"
              variant="outlined"
              handleClick={showMoreFunc}
            />
          )}
        </div>
      )}
    </>
  );
}
