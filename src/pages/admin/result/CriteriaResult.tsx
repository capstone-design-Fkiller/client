import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import PageTemplate from '@/components/common/PageTamplate';
import { MajorResponse } from '@/types/major';
import { formatResultDate } from '@/utils/date';
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

  //날짜 문자로 변환
  const applyStartDate = new Date(major?.apply_start_date || '');
  const formatApplyStartDate = formatResultDate(applyStartDate);

  const applyEndDate = new Date(major?.apply_end_date || '');
  const formatApplyEndDate = formatResultDate(applyEndDate);
  const startDate = new Date(major?.start_date || '');
  const formatStartDate = formatResultDate(startDate);
  const endDate = new Date(major?.end_date || '');
  const formatEndDate = formatResultDate(endDate);

  if (!major) {
    return <></>;
  }

  return (
    <PageTemplate>
      <Styled.Root>
        <h2>
          {major.name} <br />
          사물함 배정 기준
        </h2>
        <Styled.Container>
          <Styled.Subject>
            <h3>사물함 배정 기간</h3>
            <span>
              <b>• 시작일:</b> {formatApplyStartDate}
            </span>
            <span>
              <b>• 종료일:</b> {formatApplyEndDate}
            </span>{' '}
          </Styled.Subject>
          <Styled.Subject>
            <h3>사물함 이용 기간</h3>
            <span>
              <b>• 시작일</b>: {formatStartDate}
            </span>
            <span>
              <b>• 종료일</b>: {formatEndDate}
            </span>
          </Styled.Subject>
          <Styled.Subject>
            <h3>배정 기준</h3>
            <span>
              <b>• 1순위</b>: {major.priority_1?.name ?? '선택 없음'}
            </span>
            <span>
              <b>• 2순위</b>: {major.priority_2?.name ?? '선택 없음'}
            </span>
            <span>
              <b>• 3순위</b>: {major.priority_3?.name ?? '선택 없음'}
            </span>
            <span>
              <b>• 동점자 배정 기준</b>: {major.is_baserule_FCFS ? '선착순' : '랜덤'}
            </span>
          </Styled.Subject>
        </Styled.Container>
        <Button
          type='submit'
          variant='outlined'
          startIcon={<Icon iconName='box' />}
          onClick={handleClick}
        >
          수정하기
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};
export default CriteriaResultPage;

const Styled = {
  Root: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 30px;
    gap: 20px;
    min-height: calc(var(--vh, 1vh) * 100 - ${({ theme }) => theme.layouts.fixedHeight});

    h2 {
      font-size: 1.2rem;
      text-align: center;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary_300};
    }
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 24px;

    width: 100%;
    height: 450px;

    background-color: ${({ theme }) => theme.colors.secondary_100};
    border: 1px solid ${({ theme }) => theme.colors.white_100};
    border-radius: 5px;
  `,
  Subject: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;

    h3 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    span {
      font-size: 15px;
      font-weight: 200;
      margin-bottom: 5px;
      b {
        font-weight: 400;
      }
    }
  `,
};
