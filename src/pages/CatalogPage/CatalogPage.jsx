// import css from './Catalog.module.css';

import CatalogList from "../../components/CatalogList/CatalogList";
import Section from "../../components/Section/Section";
import FiltersForm from '../../components/FiltersForm/FiltersForm';

export default function CatalogPage() {
  return (
    <>
      <Section variant="catalog">
        <FiltersForm />
        <CatalogList />
      </Section>
    </>
  );
}