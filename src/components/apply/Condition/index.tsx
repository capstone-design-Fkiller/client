import styled from '@emotion/styled';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import Button from '@/components/common/Button';
import { MajorPriorityAnswerRequest, MajorPriorityResponse, MajorResponse } from '@/types/major';

interface ConditionProps {
  majorInfo: MajorResponse | MajorPriorityResponse | undefined;
  setValue: Dispatch<SetStateAction<Partial<MajorPriorityAnswerRequest>>>;
  handleApplyButton: () => void;
}

const Condition = (props: ConditionProps) => {
  const { majorInfo, setValue, handleApplyButton } = props;

  if (!majorInfo) return <span>추가 조건이 없습니다!</span>;

  const majorConditionList = Object.entries(majorInfo).filter(([, condt]) => condt);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>, order: string) => {
    let value: number | boolean;

    if (e.target.type === 'checkbox') {
      value = e.target.checked || e.target.defaultChecked;
    } else {
      value = Number(e.target.value);
    }

    setValue(prev => {
      const prevValue = { ...prev };
      const next = {
        ...prevValue,
        [order]: value,
      };

      return next;
    });
  };

  return (
    <Styled.Root>
      <div>
        {majorConditionList.map(([order, condt]) => (
          <Styled.ConditionWrapper key={order}>
            <Styled.Name>{condt.name}</Styled.Name>
            {condt.is_bool ? (
              <Styled.Label>
                <Styled.Input type='checkbox' onChange={e => onChangeInput(e, order)} />
                <span className='slider' />
              </Styled.Label>
            ) : (
              <Styled.Input placeholder={condt.question} onChange={e => onChangeInput(e, order)} />
            )}
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

  Label: styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

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
      border-radius: 50%;
    }

    & .slider:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
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
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    & .slider {
      border-radius: 34px;
    }

    & .slider:before {
      border-radius: 50%;
    }
  `,

  Input: styled.input`
    width: 100%;
    padding: 10px 5px;

    &::placeholder {
      font-size: 14px;
    }
  `,
};
