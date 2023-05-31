import { useState } from 'react';

import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import Sharable from '@/components/share/Sharable';
import { MAJOR } from '@/constants/major';
import { useFetchMyLocker, useFetchSharableLockers, useShareLockerMutation } from '@/query/locker';
import { useFetchMe } from '@/query/user';
import { LockerResponse } from '@/types/locker';

const ApplySharePage = () => {
  const { me } = useFetchMe();
  const [selectedLocker, setSelectedLocker] = useState<LockerResponse | undefined>();
  const { myLocker } = useFetchMyLocker(me?.id ?? 0);

  if (!me) return <div>로그인 해주세요!</div>;

  const { sharableLockers, isLoading } = useFetchSharableLockers(MAJOR[me.major]);
  const { mutate } = useShareLockerMutation();

  const onSubmit = () => {
    if (!selectedLocker) return;

    const answer = confirm('정말 쉐어 신청 하시겠습니까?');

    if (answer) mutate({ id: selectedLocker.id, shared_id: me.id });
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>쉐어할 사물함을 선택해주세요!</Styled.Title>
        <Styled.Container>
          <Sharable
            id={(selectedLocker && selectedLocker.id) || 0}
            lockers={sharableLockers || []}
            isLoading={isLoading}
            setSelectedLocker={setSelectedLocker}
          />
        </Styled.Container>
        {myLocker ? (
          <>
            <Styled.Inform>사물함이 이미 존재합니다.</Styled.Inform>
            <Styled.Inform>쉐어 신청을 할 수 없습니다.</Styled.Inform>
            <br />
            <Button
              variant='outlined'
              // className={selectedLocker ? '' : 'disabled'}
              color='error'
              // css={Styled.ExtendedButton}
              disableFocusRipple
              disableTouchRipple
              disabled
            >
              쉐어 신청불가
            </Button>
          </>
        ) : (
          <Button
            variant='contained'
            className={selectedLocker ? '' : 'disabled'}
            css={Styled.ExtendedButton}
            onClick={onSubmit}
          >
            쉐어 신청하기
          </Button>
        )}
      </Styled.Root>
    </PageTemplate>
  );
};

export default ApplySharePage;
