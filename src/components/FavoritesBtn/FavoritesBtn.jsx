import { useSelector } from 'react-redux';
import css from './FavoritesBtn.module.css';
import { selectFavorites } from '../../redux/favoritesSlice';
import clsx from 'clsx';

export default function FavoritesBtn({ favoritesHandleClick, id, iconsPass }) {
  function handleClick() {
    favoritesHandleClick();
  }

  const favoriteCampers = useSelector(selectFavorites);
  function isItemInFavorites() {
    return favoriteCampers.find(camper => camper.id === id);
  }
  return (
    <>
      <button
        className={clsx(
          css.favoritesBtn,
          isItemInFavorites() && css.isFavorite
        )}
        type="button"
        onClick={handleClick}
      >
        <svg className={css.favorBtnIcon} width="24" height="24">
          <use href={`${iconsPass}#heart`}></use>
        </svg>
      </button>
    </>
  );
}
