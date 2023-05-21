import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import CustomSuspense from '@/components/common/CustomSuspense';
import Loader from '@/components/common/Loader';
import ToastProvider from '@/components/common/Toast';
import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

const NoticePage = lazy(() => import('@/pages/notice'));
const SharePage = lazy(() => import('@/pages/locker-mode/share'));
const MainPage = lazy(() => import('@/pages/main'));
const SelectApplyMode = lazy(() => import('@/pages/locker-mode'));
const LoginPage = lazy(() => import('@/pages/login'));
const ApplyPage = lazy(() => import('@/pages/locker-mode/apply'));
const UserSharePage = lazy(() => import('@/pages/profile/register-share'));

function setScreenSize() {
  const vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function App() {
  useEffect(() => {
    setScreenSize();
  }, []);

  useEffect(() => {
    const onResize = () => {
      setScreenSize();
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <ToastProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path={PATH.LOGIN} element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path={PATH.MAIN} element={<MainPage />} />
            <Route path={PATH.LOCKER} element={<SelectApplyMode />} />
            <Route path={PATH.APPLY} element={<ApplyPage />} />
            <Route path={PATH.SHARE} element={<SharePage />} />
            <Route path={PATH.NOTICE} element={<NoticePage />} />
            <Route path={PATH.USER_SHARE} element={<UserSharePage />} />
          </Route>
        </Routes>
      </Suspense>
    </ToastProvider>
  );
}

export default App;

const PrivateRoute = () => {
  const { me, isLoading } = useFetchMe();

  return me ? (
    <Outlet />
  ) : (
    <CustomSuspense isLoading={isLoading} fallback={<Loader />}>
      <Navigate to={PATH.LOGIN} replace />
    </CustomSuspense>
  );
};

const PublicRoute = () => {
  const { me } = useFetchMe();

  return me ? <Navigate to={PATH.MAIN} replace /> : <Outlet />;
};
