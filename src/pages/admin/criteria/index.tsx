import { MouseEvent, useEffect, useState } from 'react';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import PageTemplate from '@/components/common/PageTamplate';
import Select from '@/components/common/Select';
import CustomCalendar from '@/components/share/Calendar';
import DateBox from '@/components/share/DateBox';
import { CRITERIA } from '@/constants/criteria';
import { MAJOR } from '@/constants/major';
import useToast from '@/hooks/useToast';
import { usePutMajor } from '@/query/major';
import { useFetchMe } from '@/query/user';
import { MajorPriorityRequest } from '@/types/major';
import { formatDate } from '@/utils/date';
import { PATH } from '@/utils/path';

const AdminCriteriaPage = () => {
  const navigate = useNavigate();
  const { createToastMessage } = useToast();
  const { me } = useFetchMe();
  const [selectedDate, setSelectedDate] = useState<Value | undefined>();
  const [date, setDate] = useState<string[]>(['', '']);
  const [priority1, setPriority1] = useState<string>('선택 없음');
  const [priority2, setPriority2] = useState<string>('선택 없음');
  const [priority3, setPriority3] = useState<string>('선택 없음');
  const [baserule, setBaserule] = useState<string>('선착순');
  const handleChange1 = (e: MouseEvent<HTMLLIElement>) => setPriority1(e.currentTarget.innerText);
  const handleChange2 = (e: MouseEvent<HTMLLIElement>) => setPriority2(e.currentTarget.innerText);
  const handleChange3 = (e: MouseEvent<HTMLLIElement>) => setPriority3(e.currentTarget.innerText);
  const handleChangeBase = (e: MouseEvent<HTMLLIElement>) => setBaserule(e.currentTarget.innerText);
  const { mutate } = usePutMajor();

  const getPriorityList = (currentPriority: number) => {
    const criteriaList = Object.keys(CRITERIA);
    let filteredList = criteriaList;

    if (currentPriority === 1) {
      filteredList = filteredList.filter(item => item !== priority2 && item !== priority3);
    } else if (currentPriority === 2) {
      filteredList = filteredList.filter(item => item !== priority1 && item !== priority3);
    } else if (currentPriority === 3) {
      filteredList = filteredList.filter(item => item !== priority1 && item !== priority2);
    }

    return filteredList;
  };

  const handlePutCriteria = () => {
    if (!selectedDate) {
      createToastMessage('날짜 선택은 필수입니다.', 'error');
      return;
    }

    if (priority1 === '선택 없음' && priority2 !== '선택 없음') {
      createToastMessage('1순위를 선택해야 2순위를 선택할 수 있습니다.', 'error');
      return;
    }

    if (priority2 === '선택 없음' && priority3 !== '선택 없음') {
      createToastMessage('2순위를 선택해야 3순위를 선택할 수 있습니다.', 'error');
      return;
    }

    const [start, end] = selectedDate
      .toString()
      .split(',')
      .map(date => new Date(date).toISOString());

    const body: Partial<MajorPriorityRequest> = {
      id: MAJOR[me?.major ?? '학과'],
      name: me?.major ?? '학과',
      priority_1: priority1 === '선택 없음' ? null : CRITERIA[priority1],
      priority_2: priority2 === '선택 없음' ? null : CRITERIA[priority2],
      priority_3: priority3 === '선택 없음' ? null : CRITERIA[priority3],
      // apply_start_date: start,
      // apply_end_date: end,
      is_baserule_FCFS: baserule === '선착순' ? false : true,
    };

    mutate(body, {
      onSuccess: () => navigate(PATH.MAIN),
      onError: error => console.error('PutMajor Error:', error),
    });

    // 여기에 설정 완료 alert 보낼지 고민중
  };

  useEffect(() => {
    if (!selectedDate) return;
    else {
      const [start, end] = selectedDate
        .toString()
        .split(',')
        .map(date => new Date(date));
      const formattedStartDate = formatDate(start);
      const formattedEndDate = formatDate(end);

      setDate([formattedStartDate, formattedEndDate]);
    }
  }, [selectedDate]);

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Header>
          <h2>{me?.major} 사물함 배정하기</h2>
        </Styled.Header>
        <Styled.InformText>
          <span>배정 날짜와 기준을 선택해주세요.</span>
          <br />
          <span>배정 날짜와 동점자 배정 기준은 필수 항목입니다.</span>
        </Styled.InformText>
        <CustomCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

        <Styled.SelectWrapper>
          <DateBox label='배정 접수 시작일' date={date[0]} />
          <DateBox label='배정 접수 종료일' date={date[1]} />
        </Styled.SelectWrapper>

        <Styled.Container>
          <Styled.InformBox>
            <Styled.Labels>
              <span>1순위: </span>
              <Select value={priority1} list={getPriorityList(1)} handleChange={handleChange1} />
            </Styled.Labels>
            <Styled.Labels>
              <span>2순위:</span>
              <Select value={priority2} list={getPriorityList(2)} handleChange={handleChange2} />
            </Styled.Labels>
            <Styled.Labels>
              <span>3순위:</span>
              <Select value={priority3} list={getPriorityList(3)} handleChange={handleChange3} />
            </Styled.Labels>
            <Styled.Labels>
              <span>동점자 기준:</span>
              <Select value={baserule} list={['선착순', '랜덤']} handleChange={handleChangeBase} />
            </Styled.Labels>
          </Styled.InformBox>
        </Styled.Container>

        <Button
          type='submit'
          variant='contained'
          startIcon={<Icon iconName='box' />}
          onClick={handlePutCriteria}
        >
          사물함 배정하기
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default AdminCriteriaPage;
