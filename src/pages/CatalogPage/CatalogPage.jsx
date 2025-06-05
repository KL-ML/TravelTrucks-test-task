// import css from './Catalog.module.css';

import CatalogList from "../../components/CatalogList/CatalogList";
import Section from "../../components/Section/Section";
import FiltersForm from '../../components/FiltersForm/FiltersForm';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campersOps';

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <Section variant="catalog">
        <FiltersForm />
        <CatalogList />
      </Section>
    </>
  );
}