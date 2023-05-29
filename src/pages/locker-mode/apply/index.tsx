import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Condition from '@/components/apply/Condition';
import Locker from '@/components/apply/Locker';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import PageTemplate from '@/components/common/PageTamplate';
import Select from '@/components/common/Select';
import { BUILDING } from '@/constants/building';
import { MAJOR } from '@/constants/major';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';
import useToast from '@/hooks/useToast';
import { useFetchApplicant, useApplyLockerMutation } from '@/query/locker';
import { useFetchMajor } from '@/query/major';
import { useFetchMe } from '@/query/user';
import { MajorPriorityResponse } from '@/types/major';
import { PATH } from '@/utils/path';

const ApplyPage = () => {
  const { me } = useFetchMe();

  const { open, handleOpen } = useModal();
  const { createToastMessage } = useToast();

  const navigate = useNavigate();

  if (!me) {
    createToastMessage('로그인을 다시 해주세요!', 'error');
    navigate(PATH.LOGIN);

    return <div />;
  }

  const [structure, setStructure] = useState<string>('건물');
  const { value, setValue } = useInput<Partial<MajorPriorityResponse>>({
    priority_1: null,
    priority_2: null,
    priority_3: null,
  });
  const { mutate } = useApplyLockerMutation();

  const { majorInfo } = useFetchMajor(MAJOR[me.major], true);

  const handleSelect = (e: MouseEvent<HTMLLIElement>) => setStructure(e.currentTarget.innerText);

  const {
    data: { apply, lockerCounts },
  } = useFetchApplicant({
    major: MAJOR[me.major],
    building_id: BUILDING[structure],
  });

  const handleModalOpen = () => {
    if (!me) {
      return createToastMessage('로그인 후 사용해주세요!', 'error');
    }

    if (!lockerCounts?.length)
      return createToastMessage('해당 건물에는 사물함이 없습니다!', 'error');

    if (!majorInfo) handleApplyButton();

    handleOpen();
  };

  const handleApplyButton = () => {
    mutate({
      building_id: BUILDING[structure],
      major: MAJOR[me.major],
      user: me.id,
      ...value,
    });

    handleModalOpen();
  };

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Container>
          <Locker
            me={me}
            value={structure}
            total={lockerCounts ? lockerCounts.length : undefined}
            applyCount={apply ? apply.length : undefined}
          />
          <Styled.InformBox>
            <Select
              value={structure}
              handleChange={handleSelect}
              list={Object.keys(BUILDING).slice(1)}
            />
            <Styled.Separator />
            <div>{me.major || '학과'}</div>
          </Styled.InformBox>
        </Styled.Container>
        <Button variant='contained' onClick={handleModalOpen}>
          신청하기
        </Button>
      </Styled.Root>

      <Modal title='학과별 조건 입력' open={open} onClose={handleModalOpen}>
        {me && (
          <Condition
            majorInfo={majorInfo}
            setValue={setValue}
            handleApplyButton={handleApplyButton}
          />
        )}
      </Modal>
    </PageTemplate>
  );
};

export default ApplyPage;
