import clsx from 'clsx';
import css from './SingleCamperPage.module.css';

import { NavLink, Outlet, useParams } from 'react-router-dom';
import Section from '../../components/Section/Section';
import SingleCamper from '../../components/SingleCamper/SingleCamper';
import BookingForm from '../../components/BookingForm/BookingForm';
import { useDispatch } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { fetchCamperById } from '../../redux/operations';
import Loader from '../../components/Loader/Loader';
import iconsPass from '../../images/symbol-defs.svg';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function SingleCamperPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <>
      <Section variant="camper">
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
