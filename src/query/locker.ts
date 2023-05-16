import { useMutation, useQuery } from 'react-query';

import { getLockerCounts, getApplicant, getLockerInfo, postApplyLocker } from '@/api/locker';
import useToast from '@/hooks/useToast';
import { LockerRequest, RequestApplyLocker } from '@/types/locker';

const QUERY_KEY = {
  apply: 'apply',
  locker: 'locker',
};

export const useFetchApplicant = (props: LockerRequest) => {
  const additionalKeys = Object.values(props);

  const { data: lockerCounts } = useQuery(
    [QUERY_KEY.locker, 'locker-counts', ...additionalKeys],
    () => getLockerCounts(props),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  const { data: apply } = useQuery(
    [QUERY_KEY.apply, 'applicant', ...additionalKeys],
    () => getApplicant(props),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  return { data: { apply, lockerCounts } };
};

export const useFetchLockerInfo = (id: number) => {
  const { data } = useQuery([QUERY_KEY.locker, 'locker-info', id], () => getLockerInfo(id));

  return { locker: data };
};

export const useMutateApplyLocker = () => {
  const { setCurrentMessage, setCurrentState, handleOpen } = useToast();

  const mutation = useMutation((body: RequestApplyLocker) => postApplyLocker(body), {
    onSuccess: () => {
      setCurrentMessage('사물함 신청에 성공했습니다.');
      setCurrentState('success');
      handleOpen();
    },
    onError: () => {
      setCurrentMessage('다시 시도해주세요.');
      setCurrentState('error');
      handleOpen();
    },
  });

  return mutation;
};
