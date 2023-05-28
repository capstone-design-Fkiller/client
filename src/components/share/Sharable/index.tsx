import Loader from '@/components/common/Loader';
import { getBuildingName } from '@/constants/building';
import { LockerResponse } from '@/types/locker';

interface SharableProps {
  lockers: LockerResponse[];
  isLoading: boolean;
}

const Sharable = (props: SharableProps) => {
  const { lockers, isLoading } = props;

  if (isLoading) return <Loader />;

  return (
    <div>
      {lockers.map(item => (
        <div key={item.id}>
          {getBuildingName(item.building_id)}/{item.id}
        </div>
      ))}
    </div>
  );
};

export default Sharable;
