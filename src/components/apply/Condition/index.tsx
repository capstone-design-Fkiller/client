import styled from '@emotion/styled';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import Button from '@/components/common/Button';
import { MajorPriorityResponse, MajorResponse } from '@/types/major';

interface ConditionProps {
  majorInfo: MajorResponse | MajorPriorityResponse | undefined;
  setValue: Dispatch<SetStateAction<Partial<MajorPriorityResponse>>>;
  handleApplyButton: () => void;
}

const Condition = (props: ConditionProps) => {
  const { majorInfo, setValue, handleApplyButton } = props;

  if (!majorInfo) return <span>추가 조건이 없습니다!</span>;

  const majorConditionList = Object.entries(majorInfo).filter(([, condt]) => condt);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>, order: string) => {
    const value = e.currentTarget.value;

    setValue(prev => {
      const prevValue = { ...prev };
      const next = {
        ...prevValue,
        [order]: Number(value) === 1 ? true : Number(value) === 0 ? false : Number(value),
      };

      return next;
    });
  };

  return (
    <Styled.Root>
      <div>
        {majorConditionList.map(([order, condt]) => (
          <Styled.ConditionWrapper key={order}>
            <Styled.Name>{condt}</Styled.Name>
            <Styled.Input placeholder='입력해라' onChange={e => onChangeInput(e, order)} />
          </Styled.ConditionWrapper>
        ))}
      </div>
      <Button variant='contained' onClick={handleApplyButton}>
        신청
      </Button>
    </Styled.Root>
  );
};

export default Condition;

const Styled = {
  Root: styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  ConditionWrapper: styled.div`
    width: 100%;
    margin-bottom: 15px;
  `,

  Name: styled.div`
    margin-bottom: 10px;
  `,

  Input: styled.input`
    width: 100%;
    padding: 10px 5px;
  `,
};
