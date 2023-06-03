import { css } from '@emotion/react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import * as React from 'react';

export default function TimePickerValue() {
  const [applyStart, setApplyStart] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
  const [applyEnd, setApplyEnd] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['TimePicker', 'TimePicker']}
        sx={{ width: '100%', maxWidth: '340px' }}
      >
        <TimePicker
          label='사물함 신청 시작 시간'
          value={applyStart}
          onChange={newValue => setApplyStart(newValue)}
          sx={{ minWidth: '340px', width: '100%', maxWidth: '340px' }}
          //   css={Styled.ExtendedTimePicker}
        />
        {/* 신청 시작일과 종료일이 같을 경우, 사물함 신청 종료 시간이 신청 시작 시간보다 빠를 수 있음 */}
        <TimePicker
          label='사물함 신청 종료 시간'
          value={applyEnd}
          onChange={newValue => setApplyEnd(newValue)}
          sx={{ minWidth: '340px', width: '100%', maxWidth: '340px' }}
          //   css={Styled.ExtendedTimePicker}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
const Styled = {
  ExtendedTimePicker: css`
    & MuiInputBase-root {
      width: 100%;
    }
  `,
};
