import LockerLabel from '../LockerLabel';

import { YYMMDD } from '@/utils/date';

interface DateInfoProps {
  start_label: string;
  start_date: string;
  end_label: string;
  end_date: string;
}

const DateInfo = (props: DateInfoProps) => {
  const { start_label, start_date, end_label, end_date } = props;

  console.log(start_date);

  return (
    <>
      <LockerLabel label={start_label} value={YYMMDD(start_date) ?? '-'} />
      <LockerLabel label={end_label} value={YYMMDD(end_date) || '-'} />
    </>
  );
};

export default DateInfo;
