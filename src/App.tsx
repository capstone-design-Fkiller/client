import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATH } from './utils/path';

import Loader from '@/components/common/Loader';

const SharePage = lazy(() => import('./pages/locker-mode/share'));
const MainPage = lazy(() => import('@/pages/main'));
const SelectApplyMode = lazy(() => import('@/pages/locker-mode'));
const LoginPage = lazy(() => import('@/pages/login'));
const ApplyPage = lazy(() => import('@/pages/locker-mode/apply'));

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
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={PATH.MAIN} element={<MainPage />} />
        <Route path={PATH.LOCKER} element={<SelectApplyMode />} />
        <Route path={PATH.APPLY} element={<ApplyPage />} />
        <Route path={PATH.SHARE} element={<SharePage />} />
        <Route path={PATH.NOTICE} element={<MainPage />} />
        <Route path={PATH.LOGIN} element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
