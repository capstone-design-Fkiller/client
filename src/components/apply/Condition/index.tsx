import styled from '@emotion/styled';
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';

import Button from '@/components/common/Button';
import { MajorPriorityAnswerRequest, MajorPriorityResponse, MajorResponse } from '@/types/major';

interface ConditionProps {
  majorInfo: MajorResponse | MajorPriorityResponse | undefined;
  setValue: Dispatch<SetStateAction<Partial<MajorPriorityAnswerRequest>>>;
  handleApplyButton: () => void;
}

const Condition = (props: ConditionProps) => {
  const { majorInfo, setValue, handleApplyButton } = props;
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false); // 초기에는 버튼 비활성화 상태로 설정

  if (!majorInfo) return <span>추가 조건이 없습니다!</span>;

  const majorConditionList = Object.entries(majorInfo).filter(
    ([key, condt]) => condt && key !== 'is_baserule_FCFS'
  );

  const calculateValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === 'checkbox') {
      return e.target.checked || false;
    }
    const inputValue = Number(e.target.value);

    if (inputValue < 0) {
      alert('0 이상인 값만 입력 가능합니다.');
      e.target.value = '';
    } else {
      return inputValue;
    }
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>, order: string) => {
    const value = calculateValue(e);

    setValue(prev => {
      const prevValue = { ...prev };
      const next = {
        ...prevValue,
        [`${order}_answer`]: value,
      };

      handleDisabled(next);

      return next;
    });
  };

  const handleDisabled = (next: Partial<MajorPriorityAnswerRequest>) => {
    const arr = Object.entries(next).filter(([, value]) => value !== undefined);

    const isAllAnswersFilled = arr.every(([, value]) => {
      if (value === '-1') return false;
      if (typeof value !== 'boolean' && !value) return false;

      return true;
    });

    setIsSubmitDisabled(!isAllAnswersFilled); // 모든 답변이 입력되었는지에 따라 버튼 활성화 상태 변경
  };

  useEffect(() => {
    if (!majorConditionList.length) setIsSubmitDisabled(false);
    else setIsSubmitDisabled(true);
  }, []);

  return (
    <Styled.Root>
      <div>
        <Styled.Description>
          • 동점자는 {majorInfo.is_baserule_FCFS ? '선착순' : '랜덤'} 우선배정됩니다 😊
        </Styled.Description>
        <br />
        <Styled.Description>
          • 우선순위가 높은 학생부터 차례대로 사물함이 배정됩니다.
        </Styled.Description>
        <br />
        <Styled.Description>
          • 허위 답변의 경우, 관리자 확인 후 신청이 취소될 수 있습니다.
        </Styled.Description>
        <br />
        {majorConditionList.length
          ? majorConditionList.map(([order, condt], idx) => (
              <Styled.ConditionWrapper key={order}>
                <Styled.Name>
                  {idx + 1}순위: {condt.name}
                </Styled.Name>
                {condt.is_bool ? (
                  <Styled.Label>
                    <Styled.Input type='checkbox' onChange={e => onChangeInput(e, order)} />
                    <span className='slider' />
                  </Styled.Label>
                ) : (
                  <Styled.Input
                    type='number'
                    placeholder={condt.question}
                    onChange={e => onChangeInput(e, order)}
                  />
                )}
              </Styled.ConditionWrapper>
            ))
          : null}
      </div>
      <Styled.ApplyButton>
        <Button variant='contained' onClick={handleApplyButton} disabled={isSubmitDisabled}>
          {isSubmitDisabled // 다 입력 안했으면?
            ? '신청' // 비활성화
            : '신청'}
        </Button>
      </Styled.ApplyButton>
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
  ApplyButton: styled.div`
    padding-bottom: 20px;
  `,

  ConditionWrapper: styled.div`
    width: 100%;
    margin-bottom: 25px;
  `,

  Name: styled.div`
    margin-bottom: 10px;
    font-size: 15px;
  `,

  Label: styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 29px;

    & input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    & .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 29px;
    }

    & .slider:before {
      position: absolute;
      content: '';
      height: 21px;
      width: 21px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }

    & input:checked + .slider {
      background-color: ${({ theme }) => theme.colors.primary_200};
    }

    & input:focus + .slider {
      box-shadow: 0 0 1px ${({ theme }) => theme.colors.primary_300};
    }

    & input:checked + .slider:before {
      -webkit-transform: translateX(31px);
      -ms-transform: translateX(31px);
      transform: translateX(31px);
    }
  `,

  Input: styled.input`
    width: 100%;
    padding: 10px 5px;

    &::placeholder {
      font-size: 14px;
    }
  `,

  Description: styled.p`
    color: ${({ theme }) => theme.colors.grey_300};
    font-size: 13px;
    text-align: left;
  `,
};
