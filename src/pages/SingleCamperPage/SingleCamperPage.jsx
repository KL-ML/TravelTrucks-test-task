import clsx from 'clsx';
import css from './SingleCamperPage.module.css';

import { NavLink, Outlet } from 'react-router-dom';
import Section from '../../components/Section/Section';
import SingleCamper from '../../components/SingleCamper/SingleCamper';
import BookingForm from '../../components/BookingForm/BookingForm';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function SingleCamperPage() {
  return (
    <>
      <Section variant="camper">
        <SingleCamper />
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
              <Outlet />
            </div>
            <BookingForm />
          </div>
        </div>
      </Section>
    </>
  );
}
