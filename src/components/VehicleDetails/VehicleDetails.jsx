import css from './VehicleDetails.module.css';

import Heading from '../Heading/Heading';
import { textBeautyfy } from '../../helpers/textBeautyfy';
import { nanoid } from 'nanoid';

export default function VehicleDetails({ details }) {
  return (
    <div>
      <div className={css.headingWrap}>
        <Heading tag="h3" variant="headerH3" underlined>
          Vehicle details
        </Heading>
      </div>
      <ul>
        {Object.keys(details).map(
          item =>
            details[item] && (
              <li key={nanoid()} className={css.detailItem}>
                <p>{textBeautyfy(item)}</p>
                <p>{textBeautyfy(details[item])}</p>
              </li>
            )
        )}
      </ul>
    </div>
  );
}
