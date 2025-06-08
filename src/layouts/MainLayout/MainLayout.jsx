import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import { Outlet } from 'react-router-dom';
import logoImgPath from '../../images/logo.svg';
import { Suspense } from 'react';
import Loader from '../../components/Loader/Loader';

export default function MainLayout() {
  return (
    <>
      <Container>
        <Header logoImgPath={logoImgPath} />
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
      </Container>
    </>
  );
}
