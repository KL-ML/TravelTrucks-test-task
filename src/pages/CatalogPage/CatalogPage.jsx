// import css from './Catalog.module.css';

import CatalogList from '../../components/CatalogList/CatalogList';
import Section from '../../components/Section/Section';
import FiltersForm from '../../components/FiltersForm/FiltersForm';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/operations';
import { selectFilter } from '../../redux/filtersSlice';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const filterParams = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchCampers({ params: filterParams }));
  }, [dispatch, filterParams]);

  return (
    <>
      <Section variant="catalog">
        <FiltersForm />
        <CatalogList />
      </Section>
    </>
  );
}
