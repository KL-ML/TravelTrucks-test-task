import css from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <div className={css.notFoundContainer}>
        <h1 className={css.headerNotFound}>404</h1>
        <p className={css.textNotFound}>Ow No! The page is not found...</p>
        <img
          className={css.notFoundImg}
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG1zb2drbXQ5ejZ6MXUzZWtqcDZmaHV6Y3lvcm4xNjd4bXZhZXkxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XV7oYu6ZS5mQ1o1QQG/giphy.gif"
          width="800"
          height="400"
        />
        <Link to="/" className={css.goBack}>
          Go back
        </Link>
      </div>
    </>
  );
}
