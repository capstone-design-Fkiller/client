import { Dispatch, SetStateAction } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import 'react-calendar/dist/Calendar.css';

import * as Styled from './style';

import Icon from '@/components/common/Icon';

interface CalendarProps {
  selectedDate: Value | undefined;
  setSelectedDate: Dispatch<SetStateAction<Value | undefined>>;
}

const Calendar = (props: CalendarProps) => {
  const { selectedDate, setSelectedDate } = props;

  return (
    <ReactCalendar
      value={selectedDate}
      onChange={date => setSelectedDate(date)}
      calendarType='US'
      formatDay={(locale, date) => date.toLocaleString('en', { day: 'numeric' })}
      selectRange={true}
      minDate={new Date()}
      next2Label={null}
      prev2Label={null}
      prevLabel={<Icon iconName='left' />}
      nextLabel={<Icon iconName='right' />}
      css={Styled.Calendar}
    />
  );
};

export default Calendar;
