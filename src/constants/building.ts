export const BUILDING: { [key: string]: number } = {
  건물: 0,
  인문과학관: 1,
  교수개발학습원: 2,
  사회과학관: 3,
  국제학사: 4,
  사이버관: 5,
};

export const BUILDING2: { [key: string]: number } = {
  건물: 0,
  인문관: 1,
  교개원: 2,
  사과관: 3,
  국학: 4,
  싸관: 5,
};

export const getBuildingName = (value: number) => {
  return Object.keys(BUILDING).find(key => BUILDING[key] === value);
};

export const getBuildingName2 = (value: number) => {
  return Object.keys(BUILDING2).find(key => BUILDING2[key] === value);
};
