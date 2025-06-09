import { nanoid } from 'nanoid';
import Category from '../Category/Category';
import css from './CategoriesList.module.css';
import { textBeautyfy } from '../../helpers/textBeautyfy';
import iconsPath from '../../images/symbol-defs.svg';
import clsx from 'clsx';

export default function CategoriesList({
  gray,
  categories,
  transmission,
  engine,
  variant,
}) {
  return (
    <>
      <ul className={clsx(css.categoriesList, css[variant])}>
        <li key={nanoid()}>
          <Category variant="oval" gray={gray}>
            <svg className={css.categoryIcon} width="20" height="20">
              <use href={`${iconsPath}#${transmission}`}></use>
            </svg>
            {textBeautyfy(transmission)}
          </Category>
        </li>
        <li key={nanoid()}>
          <Category variant="oval" gray={gray}>
            <svg className={css.categoryIcon} width="20" height="20">
              <use href={`${iconsPath}#${engine}`}></use>
            </svg>
            {textBeautyfy(engine)}
          </Category>
        </li>
        {Object.keys(categories).map(
          item =>
            categories[item] && (
              <li key={nanoid()}>
                <Category variant="oval" gray={gray}>
                  <svg className={css.categoryIcon} width="20" height="20">
                    <use
                      href={`${iconsPath}#${item.toLocaleLowerCase()}`}
                    ></use>
                  </svg>
                  {textBeautyfy(item)}
                </Category>
              </li>
            )
        )}
      </ul>
    </>
  );
}
