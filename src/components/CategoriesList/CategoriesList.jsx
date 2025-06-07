import { nanoid } from 'nanoid';
import Category from '../Category/Category';
import css from './CategoriesList.module.css';
import { textBeautyfy } from '../../helpers/textBeautyfy';

export default function CategoriesList({ gray, categories }) {
  return (
    <>
      <ul className={css.categoriesList}>
        {Object.keys(categories).map(
          item =>
            categories[item] && (
              <li key={nanoid()}>
                <Category variant="oval" gray={gray}>
                  {textBeautyfy(item)}
                </Category>
              </li>
            )
        )}
      </ul>
    </>
  );
}
