import { css } from '@emotion/react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import * as React from 'react';

export default function TimePickerValue() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['TimePicker', 'TimePicker']}
        sx={{ width: '100%', maxWidth: '340px' }}
      >
        <TimePicker
          label='배정 시작 시간'
          value={value}
          onChange={newValue => setValue(newValue)}
          sx={{ minWidth: '340px', width: '100%', maxWidth: '340px' }}
          //   css={Styled.ExtendedTimePicker}
        />

        <TimePicker
          label='배정 끝나는 시간'
          value={value}
          onChange={newValue => setValue(newValue)}
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
