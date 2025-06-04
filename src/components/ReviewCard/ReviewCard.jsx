import css from './ReviewCard.module.css';
import Description from '../Description/Description';
import Heading from '../Heading/Heading';

export default function ReviewCard({ name, rating, text }) {
  return (
    <div>
      <div className={css.reviewHeaderWrap}>
        <div className={css.avatar}></div>
        <div>
          <Heading tag="h4" variant="headerH4">
            {name}
          </Heading>
          <p>{rating}</p>
        </div>
      </div>

      <Description text={text} />
    </div>
  );
}
