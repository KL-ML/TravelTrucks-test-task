import Category from '../Category/Category';
import css from './CategoriesList.module.css';

export default function CategoriesList({ gray, categories }) {
  return (
    <>
      <ul className={css.categoriesList}>
        {Object.keys(categories).map(
          item =>
            categories[item] && (
              <li key={item}>
                <Category variant="oval" gray={gray}>
                  {item}
                </Category>
              </li>
            )
        )}
      </ul>
    </>
  );
}
