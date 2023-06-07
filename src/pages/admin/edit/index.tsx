import { MouseEvent, useEffect, useState } from 'react';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';
// import TimePickerValue from '../TimePicker';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import PageTemplate from '@/components/common/PageTamplate';
import Select from '@/components/common/Select';
import DateModal from '@/components/criteria/DateModal';
import CustomCalendar from '@/components/share/Calendar';
import DateBox from '@/components/share/DateBox';
import { CRITERIA, getCRITERIA } from '@/constants/criteria';
import { MAJOR } from '@/constants/major';
import useToast from '@/hooks/useToast';
import { useFetchSavedMajor, usePatchMajor } from '@/query/major';
import { useFetchMe } from '@/query/user';
import { MajorPriorityRequest } from '@/types/major';
import { formatDate } from '@/utils/date';
import { PATH } from '@/utils/path';

const AdminEditPage = () => {
  const navigate = useNavigate();
  const { createToastMessage } = useToast();
  const { me } = useFetchMe();
  const { majorInfo } = useFetchSavedMajor(MAJOR[me?.major ?? '학과']);

  const startDate = new Date(majorInfo?.start_date ?? '');
  const endDate = new Date(majorInfo?.end_date ?? '');
  const applyStartDate = new Date(majorInfo?.apply_start_date ?? '');
  const applyEndDate = new Date(majorInfo?.apply_end_date ?? '');

  //모달 관리용
  const [alertOpen, setAlertOpen] = useState(false);
  const [isDateSelectOpen, setDateSelectOpen] = useState(false);
  const [isLockerDateSelectOpen, setLockerDateSelectOpen] = useState(false);

  //달력 날짜용
  const [selectedDate, setSelectedDate] = useState<Value | undefined>();
  const [selectedLockerDate, setSelectedLockerDate] = useState<Value | undefined>();

  //수정하기 때 불러올 애들
  const storedPriority1 = majorInfo?.priority_1?.name || '선택 없음';
  const storedPriority2 = majorInfo?.priority_2?.name || '선택 없음';
  const storedPriority3 = majorInfo?.priority_3?.name || '선택 없음';

  const [priority1, setPriority1] = useState<string>(getCRITERIA(storedPriority1)); // 저장된 데이터를 초기 value로 설정.
  const [priority2, setPriority2] = useState<string>(getCRITERIA(storedPriority2));
  const [priority3, setPriority3] = useState<string>(getCRITERIA(storedPriority3));
  const [baserule, setBaserule] = useState<string>(() => {
    const storedBaseRule = majorInfo?.is_baserule_FCFS;
    return storedBaseRule ? '선착순' : '랜덤';
  });

  const [date, setDate] = useState<string[]>(() => {
    let storedStartDate = majorInfo?.apply_start_date; // 서버 저장된 배정 시작 날짜
    let storedEndDate = majorInfo?.apply_end_date; // 서버 저장된 배정 종료 날짜
    if (majorInfo?.apply_start_date && majorInfo?.apply_end_date) {
      const existStartDate = new Date(majorInfo?.apply_start_date);
      storedStartDate = formatDate(existStartDate);

      const existEndDate = new Date(majorInfo?.apply_end_date);
      storedEndDate = formatDate(existEndDate);
    }
    return [storedStartDate || '', storedEndDate || '']; // 초기 설정시 ''
  });

  const [lockerDate, setLockerDate] = useState<string[]>(() => {
    let storedStartLockerDate = majorInfo?.start_date; // 서버에서 가져온 DATE
    let storedEndLockerDate = majorInfo?.end_date;
    if (majorInfo?.start_date && majorInfo?.end_date) {
      const existStartDate = new Date(majorInfo?.start_date);
      storedStartLockerDate = formatDate(existStartDate);

      const existEndDate = new Date(majorInfo?.end_date);
      storedEndLockerDate = formatDate(existEndDate);
    }
    return [storedStartLockerDate || '', storedEndLockerDate ?? ''];
  });

  const handleAlertOpen = () => {
    setAlertOpen(!alertOpen);
    setDateSelectOpen(false);
    setLockerDateSelectOpen(false);
  };

  const handleDateSelectOpen = () => {
    setDateSelectOpen(true);
    setLockerDateSelectOpen(false);
  };

  const handleLockerDateSelectOpen = () => {
    setDateSelectOpen(false);
    setLockerDateSelectOpen(true);
  };

  const handleChange1 = (e: MouseEvent<HTMLLIElement>) => setPriority1(e.currentTarget.innerText);
  const handleChange2 = (e: MouseEvent<HTMLLIElement>) => setPriority2(e.currentTarget.innerText);
  const handleChange3 = (e: MouseEvent<HTMLLIElement>) => setPriority3(e.currentTarget.innerText);
  const handleChangeBase = (e: MouseEvent<HTMLLIElement>) => setBaserule(e.currentTarget.innerText);

  //수정하기 모드로 설정
  const { mutate } = usePatchMajor();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  //각 우선순위 옵션 리스트가 중복되지 않도록 설정
  const getPriorityList = (currentPriority: number) => {
    const criteriaList = Object.keys(CRITERIA);
    let filteredList = criteriaList;

    if (currentPriority === 1) {
      filteredList = filteredList.filter(item => item !== priority2 && item !== priority3);
    } else if (currentPriority === 2) {
      filteredList = filteredList.filter(item => item !== priority1 && item !== priority3);
    } else if (currentPriority === 3) {
      filteredList = filteredList.filter(item => item !== priority1 && item !== priority2);
    }

    if (!filteredList.includes('선택 없음')) {
      filteredList.push('선택 없음');
    }

    return filteredList;
  };

  //폼 작성한 정보 put으로 보내기
  const handlePutCriteria = () => {
    if (!isEditMode && (!selectedDate || !selectedLockerDate)) {
      createToastMessage('날짜 선택은 필수입니다.', 'error');
      return;
    }

    if (priority1 === '선택 없음' && priority2 !== '선택 없음') {
      createToastMessage('1순위를 선택해야 2순위를 선택할 수 있습니다.', 'error');
      return;
    }

    if (priority2 === '선택 없음' && priority3 !== '선택 없음') {
      createToastMessage('2순위를 선택해야 3순위를 선택할 수 있습니다.', 'error');
      return;
    }

    const [start, end] =
      selectedDate
        ?.toString()
        ?.split(',')
        .map(date => new Date(date).toISOString()) || [];

    const [startLocker, endLocker] =
      selectedLockerDate
        ?.toString()
        ?.split(',')
        .map(lockerDate => new Date(lockerDate).toISOString()) || [];

    const body: Partial<MajorPriorityRequest> = {
      id: MAJOR[me?.major ?? '학과'],
      // name: me?.major ?? '학과',
      priority_1: CRITERIA[priority1],
      priority_2: CRITERIA[priority2],
      priority_3: CRITERIA[priority3],
      start_date: startLocker, //임시로 설정
      end_date: endLocker, //임시로 설정
      apply_start_date: start,
      apply_end_date: end,
      is_baserule_FCFS: baserule === '선착순' ? true : false,
    };

    // console.log(body);

    mutate(body, {
      onSuccess: data => {
        if (!data.start_date || !data.end_date || !data.apply_end_date || !data.apply_start_date) {
          throw Error;
        } else {
          setIsButtonDisabled(true);
          setIsEditMode(true);
          setPriority1(storedPriority1);
          setPriority2(storedPriority2);
          setPriority3(storedPriority3);
          setSelectedDate([applyStartDate, applyEndDate]);
          setSelectedLockerDate([startDate, endDate]);
          navigate(PATH.MAIN);
        }
      },
      onError: error => console.error('PatchMajor Error:', error),
    });
  };

  useEffect(() => {
    if (
      majorInfo?.start_date &&
      majorInfo?.end_date &&
      majorInfo?.apply_end_date &&
      majorInfo?.apply_start_date
    ) {
      setIsEditMode(true);
    }
  }, []);

  useEffect(() => {
    if (!selectedDate) return;
    else {
      const [start, end] = selectedDate
        .toString()
        .split(',')
        .map(date => new Date(date));
      const formattedStartDate = formatDate(start);
      const formattedEndDate = formatDate(end);

      setDate([formattedStartDate, formattedEndDate]);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (!selectedLockerDate) return;
    else {
      const [startLocker, endLocker] = selectedLockerDate
        .toString()
        .split(',')
        .map(lockerDate => new Date(lockerDate));
      const formattedStartLockerDate = formatDate(startLocker);
      const formattedEndLockerDate = formatDate(endLocker);

      setLockerDate([formattedStartLockerDate, formattedEndLockerDate]);
    }
  }, [selectedLockerDate]);

  return (
    <PageTemplate>
      <Styled.Root>
        <Styled.Header>
          <h2>{me?.major} 사물함 배정하기</h2>
        </Styled.Header>
        <Styled.InformText>
          <span>배정 날짜와 기준을 선택해주세요.</span>
          <br />
          <span>배정 날짜와 동점자 배정 기준은 필수 항목입니다.</span>
        </Styled.InformText>
        <Styled.Explanation>
          <span>
            <span style={{ fontSize: '16px' }}>⏷</span> 학과 학생에게 사물함 신청 받을 기간을
            설정합니다
          </span>
          <br />
          <span>예: 3월 10일 목요일 ~ 3월 15일 일요일</span>
        </Styled.Explanation>
        <Styled.SelectWrapper onClick={handleDateSelectOpen}>
          <DateBox label='사물함 신청 시작일' date={date[0]} />
          <DateBox label='사물함 신청 종료일' date={date[1]} />
        </Styled.SelectWrapper>
        {/* <TimePickerValue /> */}
        <Styled.Explanation>
          <span>
            <span style={{ fontSize: '16px' }}>⏷</span> 학과 학생이 사물함을 이용할 기간을
            설정합니다
          </span>
          <br />
          <span>예: 한 학기(3월 15일 수요일 ~ 8월 19일 금요일)</span>
        </Styled.Explanation>
        <Styled.SelectWrapper onClick={handleLockerDateSelectOpen}>
          <DateBox label='사물함 이용 시작일' date={lockerDate[0]} />
          <DateBox label='사물함 이용 종료일' date={lockerDate[1]} />
        </Styled.SelectWrapper>
        <Styled.Container>
          <Styled.InformBox>
            <Styled.PriorityExplanation>
              <span>✔︎ 우선순위가 높은 학생부터 차례대로 사물함이 배정됩니다.</span>
            </Styled.PriorityExplanation>
            <Styled.Labels>
              <span>1순위: </span>
              <Select value={priority1} list={getPriorityList(1)} handleChange={handleChange1} />
            </Styled.Labels>
            <Styled.Labels>
              <span>2순위:</span>
              <Select value={priority2} list={getPriorityList(2)} handleChange={handleChange2} />
            </Styled.Labels>
            <Styled.Labels>
              <span>3순위:</span>
              <Select value={priority3} list={getPriorityList(3)} handleChange={handleChange3} />
            </Styled.Labels>
            <Styled.Labels>
              <span>동점자 기준:</span>
              <Select value={baserule} list={['선착순', '랜덤']} handleChange={handleChangeBase} />
            </Styled.Labels>
          </Styled.InformBox>
        </Styled.Container>
        <Button
          type='submit'
          variant='contained'
          startIcon={<Icon iconName='box' />}
          onClick={handlePutCriteria}
          disabled={isButtonDisabled}
        >
          수정하기
        </Button>
      </Styled.Root>
      <DateModal
        className='modal'
        title='날짜선택'
        open={isDateSelectOpen || isLockerDateSelectOpen}
        onClose={handleAlertOpen}
      >
        <Styled.AlertModalTitle>날짜 선택</Styled.AlertModalTitle>
        {isDateSelectOpen && (
          <div style={{ width: '100%' }}>
            <CustomCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            {/* <TimePickerValue /> */}
          </div>
        )}
        {isLockerDateSelectOpen && (
          <CustomCalendar
            selectedDate={selectedLockerDate}
            setSelectedDate={setSelectedLockerDate}
          />
        )}
        <Button onClick={handleAlertOpen}>확인</Button>
      </DateModal>
    </PageTemplate>
  );
};

export default AdminEditPage;
