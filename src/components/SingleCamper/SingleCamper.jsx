import { useSelector } from 'react-redux';
import Description from '../Description/Description';
import TruckHeaderGroup from '../TruckHeaderGroup/TruckHeaderGroup';
import TruckImg from '../TruckImg/TruckImg';
import css from './SingleCamper.module.css';
import { selectCamper } from '../../redux/camperSlice.js';
import { nanoid } from 'nanoid';
import Loader from '../Loader/Loader.jsx';

export default function SingleCamper({ iconsPass }) {
  const camper = useSelector(selectCamper);
  const { name, price, rating, location, reviews, gallery, description } =
    camper;
  return (
    <>
      {camper.length === 0 ? (
        <Loader />
      ) : (
        <div className={css.camperWrap}>
          <TruckHeaderGroup
            name={name}
            price={price}
            rating={rating}
            location={location}
            reviews={reviews.length}
            variant="column"
              iconsPass={iconsPass}
              hidden
          />
          <ul className={css.imagesList}>
            {gallery.map(img => (
              <li key={nanoid()}>
                <TruckImg img={img.thumb} />
              </li>
            ))}
          </ul>
          <Description>{description}</Description>
        </div>
      )}
    </>
  );
}
