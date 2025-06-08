import { useSelector } from 'react-redux';
import { selectCamper } from '../../redux/camperSlice';
import ReviewCard from '../ReviewCard/ReviewCard';
import css from './Reviews.module.css';
import { nanoid } from 'nanoid';
import iconsPath from '../../images/symbol-defs.svg';

export default function Reviews() {
  const currentCamper = useSelector(selectCamper);

  return (
    <>
      {currentCamper.reviews && (
        <div className={css.reviewsWrap}>
          <ul className={css.reviewsList}>
            {currentCamper.reviews.map(
              ({ reviewer_rating, reviewer_name, comment }) => (
                <li key={nanoid()}>
                  <ReviewCard
                    rating={reviewer_rating}
                    name={reviewer_name}
                    text={comment}
                    iconsPath={iconsPath}
                  />
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </>
  );
}
