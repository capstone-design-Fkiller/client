import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import PageTemplate from '@/components/common/PageTamplate';
import SortResult from '@/components/sort/SortResult';
import { MAJOR } from '@/constants/major';
import { useFetchMajor } from '@/query/major';
import { useFetchSort, useLockerAssignMutation } from '@/query/sort';
import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

const SortPage = () => {
  const { me } = useFetchMe();

  if (!me) throw new Error();

  const navigate = useNavigate();
  const { data: sorts, isLoading: isSortLoading } = useFetchSort(MAJOR[me?.major ?? '학과']);
  const { mutate } = useLockerAssignMutation();
  const [currentSort, setCurrentSort] = useState(sorts);
  const [currentPage, setCurrentPage] = useState(1);
  const { majorInfo } = useFetchMajor(MAJOR[me.major], false);

  
  const handleDeleteResult = (id: number) => {
    setCurrentSort(locks => {
      const prevLockers = locks?.filter(l => l.id !== id);

      return prevLockers;
    });
  };

  const handleSubmitResult = () => {
    if (!majorInfo?.apply_end_date) throw new Error();

    const applyEndDate = new Date(majorInfo?.apply_end_date);
    const now = new Date();

    if (applyEndDate < now) return;

    const request = currentSort?.map(lock => lock.id);

    mutate({ major: MAJOR[me.major], sortResult: { list: request || [] } });
    navigate(PATH.MAIN);
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>사물함 배정 예상 결과</Styled.Title>
        <Styled.InformText>
          <p>사물함 신청이 끝나면 배정 확정 버튼을 눌러주세요.</p>
          <p>배정 확정 이후에는 변경이 불가합니다.</p>
        </Styled.InformText>
        <SortResult
          isLoading={isSortLoading}
          sorts={sorts}
          currentSort={currentSort}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handleDelete={handleDeleteResult}
        />
        <Button variant='contained' color='primary' onClick={handleSubmitResult}>
          배정 확정하기
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default SortPage;
