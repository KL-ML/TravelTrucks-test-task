// import { useSelector } from 'react-redux';
import Description from '../Description/Description';
import TruckHeaderGroup from '../TruckHeaderGroup/TruckHeaderGroup';
import TruckImg from '../TruckImg/TruckImg';
import css from './SingleCamper.module.css';
// import { selectSingleCamper } from '../../redux/singleCamperSlice';

export default function SingleCamper() {
  // const camper = useSelector(selectSingleCamper);
  // console.log(camper);
  return (
    <div className={css.camperWrap}>
      <TruckHeaderGroup variant="column" />
      <ul className={css.imagesList}>
        <li>
          <TruckImg />
        </li>
        <li>
          <TruckImg />
        </li>
        <li>
          <TruckImg />
        </li>
        <li>
          <TruckImg />
        </li>
      </ul>
      <Description>
        Embrace simplicity and freedom with the Mavericks panel truck, an ideal
        choice for solo travelers or couples seeking a compact and efficient way
        to explore the open roads. This no-frills yet reliable panel truck
        offers the essentials for a comfortable journey, making it the perfect
        companion for those who value simplicity and functionality.{' '}
      </Description>
    </div>
  );
}
