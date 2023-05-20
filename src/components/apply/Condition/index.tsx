import { ChangeEvent } from 'react';

import { MajorPriorityResponse, MajorResponse } from '@/api/major';
import Button from '@/components/common/Button';

interface ConditionProps {
  majorInfo: MajorResponse | MajorPriorityResponse | undefined;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleApplyButton: () => void;
}

const Condition = (props: ConditionProps) => {
  const { majorInfo, handleInput, handleApplyButton } = props;

  if (!majorInfo) return <span>추가 조건이 없습니다!</span>;

  const majorConditionList = Object.entries(majorInfo).filter(([, condt]) => condt);

  return (
    <>
      {majorConditionList.map(([order, condt]) => (
        <div key={order}>
          <span>{condt}</span>
          <input placeholder='입력해라' onChange={handleInput} />
        </div>
      ))}
      <Button variant='contained' onClick={handleApplyButton}>
        신청
      </Button>
    </>
  );
};

export default Condition;
