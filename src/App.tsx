import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/main';
import { PATH } from './utils/path';

// TODO locker, notice element 변경
function App() {
  return (
    <BrowserRouter>
      {/* // TODO LOADING 컴포넌트 생성 */}
      <Suspense fallback={<div>로딩중</div>}>
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
