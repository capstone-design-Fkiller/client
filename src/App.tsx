import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PATH } from './utils/path';

import Loader from '@/components/common/Loader';

const MainPage = lazy(() => import('./pages/main'));

// TODO locker, notice element 변경
function App() {
  return (
    <BrowserRouter>
      {/* // TODO LOADING 컴포넌트 생성 */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={PATH.MAIN} element={<MainPage />} />
          <Route path={PATH.LOCKER} element={<MainPage />} />
          <Route path={PATH.NOTICE} element={<MainPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
