import CriteriaResultPage from './result/CriteriaResult';
import AdminEditPage from '../admin/edit';

import { MAJOR } from '@/constants/major';
import { useFetchSavedMajor } from '@/query/major';
import { useFetchMe } from '@/query/user';

const AdminPage = () => {
  const { me } = useFetchMe();
  const { majorInfo } = useFetchSavedMajor(MAJOR[me?.major ?? '학과']);
  console.log(majorInfo);

  if (
    !majorInfo?.apply_start_date &&
    !majorInfo?.apply_end_date &&
    !majorInfo?.start_date &&
    !majorInfo?.end_date
  ) {
    return <AdminEditPage />;
  } else {
    return <CriteriaResultPage major={majorInfo} />;
  }
};
export default AdminPage;
