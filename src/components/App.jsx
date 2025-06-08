import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const MainLayout = lazy(() => import('../layouts/MainLayout/MainLayout'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
const SingleCamperPage = lazy(() =>
  import('../pages/SingleCamperPage/SingleCamperPage')
);
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
const Features = lazy(() => import('./Features/Features'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Loader = lazy(() => import('./Loader/Loader'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<SingleCamperPage />}>
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
