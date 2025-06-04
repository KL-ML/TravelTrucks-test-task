import Category from '../Category/Category';
import css from './CategoriesList.module.css';

export default function CategoriesList({gray}) {
    return (
      <>
        <ul className={css.categoriesList}>
          <li>
            <Category variant="oval" gray={gray}>
              Automatic
            </Category>
          </li>
          <li>
            <Category variant="oval" gray={gray}>
              Automatic
            </Category>
          </li>
          <li>
            <Category variant="oval" gray={gray}>
              Automatic
            </Category>
          </li>
          <li>
            <Category variant="oval" gray={gray}>
              Automatic
            </Category>
          </li>
          <li>
            <Category variant="oval" gray={gray}>
              Automatic
            </Category>
          </li>
          <li>
            <Category variant="oval" gray={gray}>
              Automatic
            </Category>
          </li>
          <li>
            <Category variant="oval" gray={gray}>
              Automatic
            </Category>
          </li>
        </ul>
      </>
    );
}