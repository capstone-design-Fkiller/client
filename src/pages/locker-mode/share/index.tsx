import { MouseEvent, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import Select from '@/components/common/Select';
import Sharable from '@/components/share/Sharable';
import { BUILDING } from '@/constants/building';
import { MAJOR } from '@/constants/major';
import { useConvertShareMutation, useFetchSharableLockers } from '@/query/locker';
import { useFetchMe } from '@/query/user';
import { LockerResponse } from '@/types/locker';
import { PATH } from '@/utils/path';

// TODO 쉐어 페이지에 필요한 정보
// * 1. 대여 기간

// TODO 필요한 API
// share
// login
// user 정보 가져오는 것

const ApplySharePage = () => {
  const [building, setBuilding] = useState<string>('건물');
  const handleChange = (e: MouseEvent<HTMLLIElement>) => setBuilding(e.currentTarget.innerText);
  const [selectedLocker, setSelectedLocker] = useState<LockerResponse | undefined>();

  const queryClient = useQueryClient();

  const QUERY_KEY = {
    myLocker: 'myLocker',
  };

  const { me } = useFetchMe();
  const navigate = useNavigate();

  if (!me) return <div />;

  const { sharableLockers, isLoading } = useFetchSharableLockers(MAJOR[me.major]);
  const { mutate } = useConvertShareMutation();

  const onSubmit = () => {
    if (!selectedLocker) return;

    console.log(selectedLocker, '쉐어할 내 락커');
    // 쉐어 반납 시에는 shared_id null 과 share_start_date null, share_end_date를 null 로 보내면 된다.
    mutate(
      {
        id: selectedLocker.id,
        shared_id: me.id,
        is_share_registered: false,
      },
      {
        onSuccess: () => {
          queryClient.removeQueries(QUERY_KEY.myLocker);

          navigate(PATH.MAIN);
        },
      }
    );
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Container>
          {/** // ! 추후 Locker 컴포넌트가 아닌 Table 컴포넌트로 변경해야 할 듯 */}
          {/* <Locker me={me} value={building} /> */}
          <Sharable
            me={me}
            lockers={sharableLockers || []}
            isLoading={isLoading}
            setSelectedLocker={setSelectedLocker}
          />
          <Styled.InformBox>
            {/* 클릭 시 건물을 선택할 수 있도록 */}
            <Select
              value={building}
              list={Object.keys(BUILDING).slice(1)}
              handleChange={handleChange}
            />
          </Styled.InformBox>
        </Styled.Container>
        <Button variant='contained' onClick={onSubmit}>
          쉐어 신청하기
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default ApplySharePage;
