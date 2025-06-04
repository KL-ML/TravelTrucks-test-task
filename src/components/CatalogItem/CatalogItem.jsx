import css from './CatalogItem.module.css';

import Heading from '../Heading/Heading';
import Category from '../Category/Category';
import Button from '../Button/Button';
import TruckHeaderGroup from '../TruckHeaderGroup/TruckHeaderGroup';
import Description from '../Description/Description';
import CategoriesList from '../CategoriesList/CategoriesList';
import { Link } from 'react-router-dom';
import TruckImg from '../TruckImg/TruckImg';


export default function CatalogItem() {
  return (
    <div className={css.catalogCard}>
      <TruckImg />
      
      <div className={css.cardDesriptionWrap}>
        <TruckHeaderGroup />
        <Description>
          Embrace simplicity and freedom with the Mavericks panel truck...
        </Description>
        <CategoriesList />
        <Link to="/catalog/:id">
          <Button type="button" text="Show more" variant="filled" />
        </Link>
      </div>
    </div>
  );
}
