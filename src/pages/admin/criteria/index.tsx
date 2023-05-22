import { useEffect, useState } from 'react';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import PageTemplate from '@/components/common/PageTamplate';
import CustomCalendar from '@/components/share/Calendar';
import DateBox from '@/components/share/DateBox';
import { formatDate } from '@/utils/date';
import { PATH } from '@/utils/path';

const AdminCriteria = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Value | undefined>();
  const [date, setDate] = useState<string[]>(['', '']);

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
        <div>
          <span>OO학과 사물함 배정하기</span>
        </div>
        <div>
          <span>배정 기준을 선택해주세요.</span>
          <span>배정 기준 우선순위가 없을 때 선착순/랜덤 배정 중 선택하세요.</span>
        </div>
        <form>
          <div>
            <label htmlFor='criteria1'>1순위: </label>
            <select id='criteria1' name='criteria1'>
              <option value='distance'>통학 거리</option>
              <option value='status'>재학 여부</option>
              <option value='grade'>학년</option>
            </select>
          </div>
          <div>
            <label htmlFor='criteria2'>2순위: </label>
            <select id='criteria2' name='criteria2'>
              <option value='distance'>통학 거리</option>
              <option value='status'>재학 여부</option>
              <option value='grade'>학년</option>
            </select>
          </div>
          <div>
            <label htmlFor='criteria3'>3순위: </label>
            <select id='criteria3' name='criteria3'>
              <option value='distance'>통학 거리</option>
              <option value='status'>재학 여부</option>
              <option value='grade'>학년</option>
            </select>
          </div>
          <CustomCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

          <Styled.SelectWrapper>
            <DateBox label='배정 접수 시작일' date={date[0]} />
            <DateBox label='배정 접수 종료일' date={date[1]} />
          </Styled.SelectWrapper>
        </form>

        <Button
          type='submit'
          variant='contained'
          startIcon={<Icon iconName='box' />}
          onClick={() => navigate(PATH.APPLY)}
        >
          사물함 배정하기
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default AdminCriteria;
