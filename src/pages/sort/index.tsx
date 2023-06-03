import { useEffect, useState } from 'react';
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
  const { data: sorts, isLoading: isSortLoading } = useFetchSort(MAJOR[me?.major || '학과']);
  const { mutate: assignMutate } = useLockerAssignMutation();
  const [currentSort, setCurrentSort] = useState(sorts);
  const [currentPage, setCurrentPage] = useState(1);
  const { majorInfo } = useFetchMajor(MAJOR[me.major], false);

  const checkApplicationDate = () => {
    // if (!majorInfo?.apply_end_date) return false; //throw new Error();
    // 테스트를 위해 허용으로 변경
    if (!majorInfo?.apply_end_date) return false; //throw new Error();

    const applyEndDate = new Date(majorInfo?.apply_end_date);
    const now = new Date();

    if (applyEndDate <= now) return true;
  };

  const handleDeleteResult = (id: number) => {
    setCurrentSort(locks => {
      const prevLockers = locks?.filter(l => l.id !== id);
      return prevLockers;
    });
  };

  const handleSubmitResult = () => {
    const request = currentSort?.map(lock => lock.id);
    const res = confirm('확정 후엔 변경이 불가합니다.');

    if (res) {
      assignMutate(
        { major: MAJOR[me.major], sortResult: { list: request || [] } },
        {
          onSuccess: () => {
            navigate(PATH.MAIN);
          },
        }
      );
    }
  };

  useEffect(() => {
    setCurrentSort(sorts);
  }, [sorts]);

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Title>사물함 배정 예상 결과</Styled.Title>
        <Styled.InformText>
          <p>사물함 신청이 끝나면 배정 확정 버튼이 활성화됩니다.</p>
          <p>페이지를 나가면 변경사항이 모두 사라집니다.</p>
        </Styled.InformText>
        <SortResult
          isLoading={isSortLoading}
          currentSort={currentSort}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handleDelete={handleDeleteResult}
        />
        {/* 이 조건은 테스트할 땐 빼야할 듯! */}
        {(checkApplicationDate() && sorts?.length) ? (
          <Button variant='contained' color='primary' onClick={handleSubmitResult}>
            배정 확정하기
          </Button>
        ): undefined}
      </Styled.Root>
    </PageTemplate>
  );
};

export default SortPage;
