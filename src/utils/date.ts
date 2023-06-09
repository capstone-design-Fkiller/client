const weeks = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] as const;

export const formatDate = (date: Date, withWeekday = true) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = weeks[date.getDay()];

  return withWeekday ? `${month}월 ${day}일 ${weekday}` : `${month}월 ${day}일`;
};

export const formatResultDate = (date: Date, withWeekday = true) => {
  date.setHours(date.getHours() + 9);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = weeks[date.getDay()];

  return withWeekday ? `${year}년 ${month}월 ${day}일 ${weekday}` : `${year}년 ${month}월 ${day}일`;
};

export const YYMMDD = (inputDate: string, time = false) => {
  const date = new Date(inputDate);

  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  if (time) {
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');

    return `${month}/${day} ${hour}:${minute}`;
  }

  return `${year}.${month}.${day}`;
};

export const MMDD = (inputDate: string, time = false) => {
  const date = new Date(inputDate);

  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  if (time) {
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');

    return `${month}/${day} ${hour}:${minute}`;
  }

  return `${month}.${day}`;
};
