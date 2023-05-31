import { MouseEvent, useEffect, useState } from 'react';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import { useNavigate } from 'react-router-dom';

import * as Styled from './style';

import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import PageTemplate from '@/components/common/PageTamplate';
import Select from '@/components/common/Select';
import DateModal from '@/components/criteria/DateModal';
import CustomCalendar from '@/components/share/Calendar';
import DateBox from '@/components/share/DateBox';
import { CRITERIA } from '@/constants/criteria';
import { MAJOR } from '@/constants/major';
import useToast from '@/hooks/useToast';
import { useFetchSavedMajor, usePutMajor } from '@/query/major';
import { useFetchMe } from '@/query/user';
import { MajorPriorityRequest } from '@/types/major';
import { formatDate } from '@/utils/date';
import { PATH } from '@/utils/path';

const AdminCriteriaPage = () => {
  const navigate = useNavigate();
  const { createToastMessage } = useToast();
  const { me } = useFetchMe();
  const { majorInfo } = useFetchSavedMajor(MAJOR[me?.major ?? '학과']);

  //모달 관리용
  const [alertOpen, setAlertOpen] = useState(false);
  const [isDateSelectOpen, setDateSelectOpen] = useState(false);
  const [isLockerDateSelectOpen, setLockerDateSelectOpen] = useState(false);

  //달력 날짜용
  const [selectedDate, setSelectedDate] = useState<Value | undefined>();
  const [selectedLockerDate, setSelectedLockerDate] = useState<Value | undefined>();

  const [priority1, setPriority1] = useState<string>(() => {
    const storedPriority1 = localStorage.getItem('priority1');
    return storedPriority1 || '선택 없음';
  });
  const [priority2, setPriority2] = useState<string>(() => {
    const storedPriority2 = localStorage.getItem('priority2');
    return storedPriority2 || '선택 없음';
  });
  const [priority3, setPriority3] = useState<string>(() => {
    const storedPriority3 = localStorage.getItem('priority3');
    return storedPriority3 || '선택 없음';
  });
  const [baserule, setBaserule] = useState<string>(() => {
    const storedBaseRule = localStorage.getItem('baserule');
    return storedBaseRule || '선착순';
  });
  const [date, setDate] = useState<string[]>(() => {
    const storedStartDate = localStorage.getItem('startDate');
    const storedEndDate = localStorage.getItem('endDate');
    return [storedStartDate || '', storedEndDate || ''];
  });
  console.log(date);
  const [lockerDate, setLockerDate] = useState<string[]>(() => {
    const storedStartLockerDate = localStorage.getItem('startLockerDate');
    const storedEndLockerDate = localStorage.getItem('endLockerDate');
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
  const { mutate } = usePutMajor();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isEditMode, setIsEditMode] = useState(() => {
    const storedEditMode = localStorage.getItem('isEditMode');
    return storedEditMode === 'true';
  });

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

  const handlePutCriteria = () => {
    if (!selectedDate) {
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

    if (!selectedDate) return;
    if (!selectedLockerDate) return;

    const [start, end] = selectedDate
      .toString()
      .split(',')
      .map(date => new Date(date).toISOString());

    const [startLocker, endLocker] = selectedLockerDate
      .toString()
      .split(',')
      .map(lockerDate => new Date(lockerDate).toISOString());

    const body: Partial<MajorPriorityRequest> = {
      id: MAJOR[me?.major ?? '학과'],
      name: me?.major ?? '학과',
      priority_1: CRITERIA[priority1],
      priority_2: CRITERIA[priority2],
      priority_3: CRITERIA[priority3],
      start_date: startLocker, //임시로 설정
      end_date: endLocker, //임시로 설정
      apply_start_date: start,
      apply_end_date: end,
      is_baserule_FCFS: baserule === '선착순' ? false : true,
    };

    console.log(body);

    mutate(body, {
      onSuccess: () => {
        if (
          !majorInfo?.start_date ||
          !majorInfo?.end_date ||
          !majorInfo?.apply_end_date ||
          !majorInfo?.apply_start_date
        )
          throw Error;
        // 정보를 localStorage에 저장
        localStorage.setItem('isEditMode', 'true');
        localStorage.setItem('priority1', priority1);
        localStorage.setItem('priority2', priority2);
        localStorage.setItem('priority3', priority3);
        localStorage.setItem('baserule', baserule);
        localStorage.setItem('startDate', majorInfo?.apply_start_date);
        localStorage.setItem('endDate', majorInfo?.apply_end_date);
        localStorage.setItem('startLockerDate', majorInfo?.start_date);
        localStorage.setItem('endLockerDate', majorInfo?.end_date);

        setIsButtonDisabled(true);
        setIsEditMode(true);
        localStorage.setItem('isEditMode', 'true');
        navigate(PATH.MAIN);
      },
      onError: error => console.error('PutMajor Error:', error),
    });
  };

  useEffect(() => {
    const storedEditMode = localStorage.getItem('isEditMode');
    if (storedEditMode === 'true') {
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

        <Styled.SelectWrapper onClick={handleLockerDateSelectOpen}>
          <DateBox label='사물함 이용 시작일' date={lockerDate[0]} />
          <DateBox label='사물함 이용 종료일' date={lockerDate[1]} />
        </Styled.SelectWrapper>
        <Styled.SelectWrapper onClick={handleDateSelectOpen}>
          <DateBox label='배정 접수 시작일' date={date[0]} />
          <DateBox label='배정 접수 종료일' date={date[1]} />
        </Styled.SelectWrapper>

        <Styled.Container>
          <Styled.InformBox>
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
          {isEditMode ? '수정하기' : '배정 기준 설정하기'}
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
          <CustomCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
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

export default AdminCriteriaPage;
