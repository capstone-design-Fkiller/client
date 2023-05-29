const weeks = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'] as const;

export const formatDate = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = weeks[date.getDay()];

  return `${month}월 ${day}일 ${weekday}`;
};

export const YYMMDD = (datestring: string) => {
  const date = new Date(datestring);
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}${month}${day}`;
};


export const MMDD = (datestring: string) => {
  const date = new Date(datestring);
  // const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${month}월 ${day}일`;

};