import css from './ReviewCard.module.css';
import Description from '../Description/Description';
import Heading from '../Heading/Heading';
import clsx from 'clsx';
import { nanoid } from 'nanoid';

export default function ReviewCard({ name, rating, text, iconsPath }) {
  function showRatingInStars(rating) {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push('yellow');
      } else {
        stars.push('gray');
      }
    }
    return stars;
  }
  return (
    <div>
      <div className={css.reviewHeaderWrap}>
        <div className={css.avatar}>{name.charAt(0)}</div>
        <div>
          <Heading tag="h4" variant="headerH4">
            {name}
          </Heading>
          <div className={css.ratingStarsWrap}>
            {showRatingInStars(rating).map(color => (
              <svg
                key={nanoid()}
                className={clsx(css.favorBtnIcon, css[color])}
                width="16"
                height="16"
              >
                <use href={`${iconsPath}#star`}></use>
              </svg>
            ))}
          </div>
        </div>
      </div>

      <Description text={text} />
    </div>
  );
}
