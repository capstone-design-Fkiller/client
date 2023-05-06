import { useEffect, useState } from 'react';
import { Value } from 'react-calendar/dist/cjs/shared/types';

import * as Styled from './style';

import PageTemplate from '@/components/common/PageTamplate';
import CustomCalendar from '@/components/share/Calendar';
import DateBox from '@/components/share/DateBox';
import { formatDate } from '@/utils/date';

// TODO 쉐어 페이지에 필요한 정보
// * 1. 대여 기간

const SharePage = () => {
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

  // TODO uncontrolled input 해결해야 함
  return (
    <PageTemplate>
      <Styled.Root>
        <CustomCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

        <Styled.SelectWrapper>
          <DateBox label='시작일' date={date[0]} />
          <DateBox label='종료일' date={date[1]} />
        </Styled.SelectWrapper>
      </Styled.Root>
    </PageTemplate>
  );
};

export default SharePage;
