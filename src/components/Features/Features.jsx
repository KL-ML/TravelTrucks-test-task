import CategoriesList from '../CategoriesList/CategoriesList';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import css from './Features.module.css';

export default function Features() {
  return (
    <div className={css.featuresWrap}>
      <div className={css.categoriesWrap}>
        <CategoriesList gray />
      </div>

      <VehicleDetails />
    </div>
  );
}
