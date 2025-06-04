import ReviewCard from '../ReviewCard/ReviewCard';
import css from './Reviews.module.css';

export default function Reviews() {
  return (
    <div className={css.reviewsWrap}>
      <ul className={css.reviewsList}>
        <li>
          <ReviewCard
            rating="5"
            name="Alice"
            text="The Mavericks panel truck was a perfect choice for my solo road trip. Compact, easy to drive, and had all the essentials. The kitchen facilities were sufficient, and the overall experience was fantastic."
          />
        </li>
        <li>
          <ReviewCard
            rating="3"
            name="Bob"
            text="A decent option for solo travel. The Mavericks provided a comfortable stay, but the lack of bathroom facilities was a drawback. Good for short trips where simplicity is preferred."
          />
        </li>
      </ul>
    </div>
  );
}
