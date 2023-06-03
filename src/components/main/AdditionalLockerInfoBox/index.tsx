import * as Styled from './style';
import LockerLabel from '../LockerLabel';

import Icon from '@/components/common/Icon';
import { useFetchShareUser } from '@/query/user';
import { LockerResponse } from '@/types/locker';
import { UserResponse } from '@/types/user';
import { YYMMDD } from '@/utils/date';

interface AdditionalInfoBoxProps {
  userId: number | null;
  locker: LockerResponse;
  me: UserResponse;
  shareType: string;
}
const AdditionalLockerInfoBox = (props: AdditionalInfoBoxProps) => {
  const { locker, userId, me, shareType } = props;

  const { user } = useFetchShareUser(userId ?? 0);

  return (
    <>
      <Styled.InfoLabel>[ 쉐어 정보 ]</Styled.InfoLabel>
      <Styled.MyInfo className={locker ? 'grid' : 'none'}>
        <Icon iconName='share' size='70' hasCursor={false} />
        <Styled.InnerBox>
          <LockerLabel label={shareType} value={`${user?.name}`} />
          <LockerLabel label='학과' value={`${user?.major}`} />

          {locker.owned_id === me.id && (
            <>
              {!locker.shared_id ? (
                <LockerLabel
                  label='쉐어등록여부'
                  value={locker.is_share_registered ? '✔️' : '❌'}
                />
              ) : (
                <>
                  <LockerLabel
                    label='쉐어 시작일'
                    value={locker.share_start_date ? YYMMDD(locker.share_start_date) : '-'}
                  />
                  <LockerLabel
                    label='쉐어 반납일'
                    value={locker.share_end_date ? YYMMDD(locker.share_end_date) : '-'}
                  />
                  <p>사물함 이용중</p>
                </>
              )}
            </>
          )}
        </Styled.InnerBox>
      </Styled.MyInfo>
    </>
  );
};

export default AdditionalLockerInfoBox;
