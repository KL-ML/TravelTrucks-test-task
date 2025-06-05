import { useSelector } from 'react-redux';
import Description from '../Description/Description';
import TruckHeaderGroup from '../TruckHeaderGroup/TruckHeaderGroup';
import TruckImg from '../TruckImg/TruckImg';
import css from './SingleCamper.module.css';
import { selectCamper } from '../../redux/camperSlice.js';
import { nanoid } from 'nanoid';

export default function SingleCamper() {
  const camper = useSelector(selectCamper);
  const { name, price, rating, location, reviews, gallery, description } =
    camper;
  return (
    <>
      {camper.length === 0 ? (
        <p>loading...</p>
      ) : (
        <div className={css.camperWrap}>
          <TruckHeaderGroup
            name={name}
            price={price}
            rating={rating}
            location={location}
            reviews={reviews.length}
            variant="column"
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
