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

  const { data: apply, refetch } = useQuery(
    [QUERY_KEY.apply, 'applicant', ...additionalKeys],
    () => getApplicant(props),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  return { data: { apply, lockerCounts }, refetch };
};

export const useFetchLockerInfo = (id: number) => {
  const { data } = useQuery([QUERY_KEY.locker, 'locker-info', id], () => getLockerInfo(id));

  return { locker: data };
};

export const useApplyLockerMutation = () => {
  const { createToastMessage } = useToast();

  const mutation = useMutation((body: RequestApplyLocker) => postApplyLocker(body), {
    onSuccess: () => {
      createToastMessage('신청 완료 !', 'success');
    },
    onError: () => {
      createToastMessage('다시 시도해주세요.', 'error');
    },
  });

  return mutation;
};

// ! Share Api 구현되면 추가
// export const useShareLockerMutation = () => {
//   const { createToastMessage } = useToast();

//   const mutation = useMutation(body => postShareLocker(body), {
//     onSuccess: () => {
//       createToastMessage('사물함 쉐어 신청에 성공했습니다.', 'success');
//     },
//     onError: () => {
//       createToastMessage('다시 시도해주세요.', 'error');
//     },
//   });

//   return mutation;
// };
