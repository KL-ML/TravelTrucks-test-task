import { useSelector } from 'react-redux';
import CategoriesList from '../CategoriesList/CategoriesList';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import css from './Features.module.css';
import { selectCamper } from '../../redux/camperSlice';
import iconsPath from '../../images/symbol-defs.svg';

export default function Features() {
  const currentCamper = useSelector(selectCamper);

  const {
    form,
    length,
    width,
    height,
    tank,
    consumption,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = currentCamper;

  return (
    <>
      {currentCamper.form && (
        <div className={css.featuresWrap}>
          <div className={css.categoriesWrap}>
            <CategoriesList
              iconsPath={iconsPath}
              gray
              transmission={transmission}
              engine={engine}
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
      )}
    </>
  );
}
