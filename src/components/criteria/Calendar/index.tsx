import { Dispatch, SetStateAction } from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import 'react-calendar/dist/Calendar.css';

import * as Styled from './style';

import Icon from '@/components/common/Icon';

interface CalendarProps {
  selectedLockerDate: Value | undefined;
  setSelectedLockerDate: Dispatch<SetStateAction<Value | undefined>>;
}

const LockerCalendar = (props: CalendarProps) => {
  const { selectedLockerDate, setSelectedLockerDate } = props;

  return (
    <ReactCalendar
      value={selectedLockerDate}
      onChange={lockerDate => setSelectedLockerDate(lockerDate)}
      calendarType='US'
      formatDay={(locale, lockerDate) => lockerDate.toLocaleString('en', { day: 'numeric' })}
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

export default LockerCalendar;
