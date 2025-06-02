import Section from '../../components/Section/Section';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <Section>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </Section>
    </>
  );
}
