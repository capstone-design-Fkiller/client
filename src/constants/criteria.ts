export const CRITERIA: { [key: string]: string } = {
  '선택 없음': '',
  고학번: '고학번',
  '재학 여부': '재학여부',
  '전공 수업 수': '전공수업수',
  '통학 시간': '통학시간',
  '통학 여부': '통학여부',
  '학생회비 납부 여부': '학생회비 납부여부',
};

export const getCRITERIA = (value: string) => {
  return Object.keys(CRITERIA).find(key => CRITERIA[key] === value) ?? '선택 없음';
};
