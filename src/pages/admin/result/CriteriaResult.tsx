import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import { MajorResponse } from '@/types/major';
import { PATH } from '@/utils/path';

interface ResultProps {
  major: MajorResponse | undefined;
}

const CriteriaResultPage = (props: ResultProps) => {
  const { major } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(PATH.CRITERIA_EDIT);
  };

  if (!major) {
    return <></>;
  }

  return (
    <Styled.Container>
      <h2>{major.name} 사물함 배정 기준</h2>
      <span>
        사물함 배정 기간: {major.apply_start_date} ~ {major.apply_end_date}
      </span>
      <span>
        사물함 이용 기간: {major.start_date} ~ {major.end_date}
      </span>
      <span>배정 기준</span>
      <span>1순위: {major.priority_1?.name ?? '선택 없음'}</span>
      <span>2순위: {major.priority_2?.name ?? '선택 없음'} </span>
      <span>3순위: {major.priority_3?.name ?? '선택 없음'}</span>
      <span>동점자 배정 기준: {major.is_baserule_FCFS ? `선착순` : `랜덤`}</span>
      <Button
        type='submit'
        variant='contained'
        startIcon={<Icon iconName='box' />}
        onClick={handleClick}
      >
        수정하기
      </Button>
    </Styled.Container>
  );
};
export default CriteriaResultPage;

const Styled = {
  Container: styled.div`
    display: grid;
    grid-template-rows: 350px 1fr;

    width: 100%;
    height: 450px;

    background-color: ${({ theme }) => theme.colors.white_300};
    border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
    border-radius: 5px;
  `,
};
