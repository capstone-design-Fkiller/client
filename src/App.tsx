import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATH } from './utils/path';

import Loader from '@/components/common/Loader';

const NoticePage = lazy(() => import('./pages/notice'));
const SharePage = lazy(() => import('./pages/locker-mode/share'));
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
  // 여기에서 토큰 있는지 확인하고 없으면 다른 화면으로 라우팅 되도록 하고, 있으면 토큰 넘겨주면서 메인 화면으로 연결해주면 된다.
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={PATH.MAIN} element={<MainPage />} />
        <Route path={PATH.LOCKER} element={<SelectApplyMode />} />
        <Route path={PATH.APPLY} element={<ApplyPage />} />
        <Route path={PATH.SHARE} element={<SharePage />} />
        <Route path={PATH.NOTICE} element={<NoticePage />} />
        <Route path={PATH.LOGIN} element={<LoginPage />} />
        <Route path={PATH.USER_SHARE} element={<UserSharePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
