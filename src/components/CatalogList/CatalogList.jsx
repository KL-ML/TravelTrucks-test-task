import css from './CatalogList.module.css';

import Box from '../Box/Box';
import CatalogItem from '../CatalogItem/CatalogItem';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

export default function CatalogList() {
  return (
    <div className={css.catalogWrap}>
      <Box tag="ul" variant="catalogList">
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
      </Box>
      
        <Button type="button" text="Load more" variant="outlined" />
    </div>
  );
}
