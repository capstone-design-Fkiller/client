const weeks = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] as const;

export const formatDate = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = weeks[date.getDay()];

  return `${month}월 ${day}일 ${weekday}`;
};
