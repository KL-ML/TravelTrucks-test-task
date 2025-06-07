import { useSelector } from 'react-redux';
import CategoriesList from '../CategoriesList/CategoriesList';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import css from './Features.module.css';
import { selectCamper } from '../../redux/camperSlice';

export default function Features() {
  const curentCamper = useSelector(selectCamper);

  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = curentCamper;

  return (
    <div className={css.featuresWrap}>
      <div className={css.categoriesWrap}>
        <CategoriesList
          gray
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
      </div>

      <VehicleDetails
        details={{ form, length, width, height, tank, consumption }}
      />
    </div>
  );
}
