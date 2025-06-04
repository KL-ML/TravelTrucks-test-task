import css from './VehicleDetails.module.css';

import Heading from "../Heading/Heading";

export default function VehicleDetails() {
  return (
    <div>
      <div className={css.headingWrap}>
        <Heading tag="h3" variant="headerH3" underlined>
          Vehicle details
        </Heading>
      </div>
      <ul>
        <li className={css.detailItem}>
          <p>Form</p>
          <p>Panel truck</p>
        </li>
        <li className={css.detailItem}>
          <p>Length</p>
          <p>5.4 m</p>
        </li>
        <li className={css.detailItem}>
          <p>Width</p>
          <p>2.01 m</p>
        </li>
        <li className={css.detailItem}>
          <p>Height</p>
          <p>2.05 m</p>
        </li>
        <li className={css.detailItem}>
          <p>Tank</p>
          <p>132 I</p>
        </li>
        <li className={css.detailItem}>
          <p>Consumption</p>
          <p>12.4l/100km</p>
        </li>
      </ul>
    </div>
  );
}
