import * as Styled from './style';
import LockerLabel from '../LockerLabel';

import Icon from '@/components/common/Icon';
import { useFetchShareUser } from '@/query/user';
import { LockerResponse } from '@/types/locker';
import { UserResponse } from '@/types/user';

interface AdditionalInfoBoxProps {
  userId: number;
  locker: LockerResponse;
  me: UserResponse;
  shareType: string;
}
const AdditionalLockerInfoBox = (props: AdditionalInfoBoxProps) => {
  const { locker, userId, me, shareType } = props;

  const { user } = useFetchShareUser(userId);

  return (
    <>
      <Styled.InfoLabel>[ 쉐어 대여자 ]</Styled.InfoLabel>
      <Styled.MyInfo className={locker ? 'grid' : 'none'}>
        <Icon iconName='share' size='70' hasCursor={false} />
        <Styled.InnerBox>
          <LockerLabel label={shareType} value={`${user?.name}`} />
          <LockerLabel label='학과' value={`${user?.major}`} />

          {locker.owned_id === me.id &&
            (!locker.shared_id ? (
              <LockerLabel label='쉐어등록여부' value={locker.is_share_registered ? '✔️' : '❌'} />
            ) : (
              `사물함 이용중`
            ))}
        </Styled.InnerBox>
      </Styled.MyInfo>
    </>
  );
};

export default AdditionalLockerInfoBox;
