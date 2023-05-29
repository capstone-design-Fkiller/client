import AdminMainPage from './admin';
import StudentMainPage from './student';

import { useFetchMe } from '@/query/user';

const MainPage = () => {
  const { me } = useFetchMe();

  if (me?.is_usermode) {
    return <StudentMainPage />;
  } else {
    return <AdminMainPage />;
  }
};

export default MainPage;
