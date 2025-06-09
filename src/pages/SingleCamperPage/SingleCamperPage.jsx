import clsx from 'clsx';
import css from './SingleCamperPage.module.css';

import { NavLink, Outlet, useParams } from 'react-router-dom';
import Section from '../../components/Section/Section';
import SingleCamper from '../../components/SingleCamper/SingleCamper';
import BookingForm from '../../components/BookingForm/BookingForm';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { fetchCamperById } from '../../redux/operations';
import Loader from '../../components/Loader/Loader';
import iconsPass from '../../images/symbol-defs.svg';
import { selectError, selectIsLoading } from '../../redux/camperSlice';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function SingleCamperPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const filterParams = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <>
      <Section variant="camper">
        {isLoading && <Loader variant={'catalog'} />}
        {isError && <ErrorMessage text="Error!"></ErrorMessage>}
        <SingleCamper iconsPass={iconsPass} />
        <div>
          <ul className={css.camperDetailsNav}>
            <li>
              <NavLink to="features" className={buildLinkClass}>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" className={buildLinkClass}>
                Reviews
              </NavLink>
            </li>
          </ul>
          <div className={css.detailsWrap}>
            <div>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </div>
            <BookingForm />
          </div>
        </div>
      </Section>
    </>
  );
}
