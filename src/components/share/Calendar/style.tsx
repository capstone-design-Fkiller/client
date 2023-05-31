import { Theme, css } from '@emotion/react';

export const Calendar = (theme: Theme) => css`
  &.react-calendar {
    font-family: 'NanumSquare';
    border: 1px solid ${theme.colors.light_grey_100};
    border-radius: 5px;
    padding: 10px;

    .react-calendar__navigation__arrow {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* 달력 년/월 표시 글씨 커스텀 */
    .react-calendar__navigation__label > span {
      font-size: 16px;
      font-weight: 600;
      color: black;
    }

    /* day 타일 한개 한개 모양 커스텀하기 */
    .react-calendar__tile {
      font-size: 14px;
      background: transparent;
      text-align: center;

      padding: 15px 5px;
    }

    /* 클릭할 수 없는 날짜 커스텀 */
    .react-calendar__tile:disabled abbr {
      color: ${theme.colors.grey_100};
    }

    /* 주말 날짜 커스텀 */
    .react-calendar__month-view__days__day--weekend {
      abbr {
        color: ${theme.colors.error_100};
      }
    }

    /* 달력에 오늘 표시 변경하기 */
    .react-calendar__tile--now {
      color: ${theme.colors.primary_200};
      position: relative;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        width: 80%;
        height: 2px;
        bottom: 0px;
        left: 50%;
        transform: translate(-50%, 0);

        background-color: ${theme.colors.primary_200};
      }

      &:enabled:hover {
        background-color: #e6e6e6;
      }

      &.react-calendar__tile--active::after {
        display: none;
      }
    }

    /* 이전 달, 혹은 다음 달 글씨 */
    .react-calendar__month-view__days__day--neighboringMonth {
      color: ${theme.colors.grey_100};
    }

    /* 요일 section 커스텀 하기 */
    .react-calendar__month-view__weekdays {
      background: ${theme.colors.background_2};
      abbr {
        /*월,화,수... 글자 부분*/
        color: ${theme.colors.grey_400};
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
      }
      padding: 5px 0;
      border-radius: 5px;
    }
    .react-calendar--selectRange .react-calendar__tile--hover,
    .react-calendar__tile--range {
      background-color: #8fd3b12b;
      color: ${theme.colors.primary_300};

      &:hover {
        background-color: #e6e6e6;
      }
    }

    /* (range일 경우)시작날짜, 끝 날짜 커스텀하기 */
    .react-calendar__tile--rangeStart,
    .react-calendar__tile--rangeEnd {
      border-radius: 5px;
      background-color: ${theme.colors.primary_200};
      color: ${theme.colors.white_300};
    }

    /* day 타일 hover, focus 시 모양 커스텀 */
    .react-calendar__tile:enabled:focus {
      background-color: ${theme.colors.primary_200};
      color: ${theme.colors.white_300};
    }
  }
`;
