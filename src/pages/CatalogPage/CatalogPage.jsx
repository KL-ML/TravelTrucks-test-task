import CatalogList from '../../components/CatalogList/CatalogList';
import Section from '../../components/Section/Section';
import FiltersForm from '../../components/FiltersForm/FiltersForm';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/operations';
import { selectFilter } from '../../redux/filtersSlice';
import { selectError, selectIsLoading } from '../../redux/campersSlice';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const filterParams = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers({ params: filterParams }));
  }, [dispatch, filterParams]);

  return (
    <>
      <Section variant="catalog">
        <FiltersForm />
        {isLoading && <Loader variant={'catalog'} />}
        {isError && (
          <ErrorMessage text="There are no campers here!"></ErrorMessage>
        )}
        <CatalogList />
      </Section>
    </>
  );
}
