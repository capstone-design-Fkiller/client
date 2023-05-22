import { useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery, QueryClient } from 'react-query';

import { instance } from '@/api/instance';
import { postLogin as postLogin, getMe } from '@/api/user';
import useToast from '@/hooks/useToast';
import { LoginRequest, UserResponse } from '@/types/user';

const QUERY_KEY = {
  user: 'user',
};

export const useLogin = () => {
  const { createToastMessage } = useToast();

  const mutation = useMutation((body: LoginRequest) => postLogin(body), {
    onSuccess: res => {
      createToastMessage('로그인에 성공했습니다.', 'success');

      const { refresh_token, access_token } = res.data;
      // ! 임시로 등록해 둔 옵션, 추후 fetchMe api가 개발되면 제거할 예정

      localStorage.setItem('refresh_token', JSON.stringify(refresh_token));
      localStorage.setItem('access_token', JSON.stringify(access_token));
    },
    onError: () => {
      createToastMessage('아이디와 비밀번호를 확인해주세요!', 'error');
    },
  });

  return mutation;
};

export const useFetchMe = () => {
  const [me, setMe] = useState<UserResponse | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const getAccessTokenFromCookie = () => {
    const name = 'access_token=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return '';
  };
  
  const fetchMe = async () => {
    try {
      const response = await getMe(); // 수정된 함수를 사용하여 정보를 가져옴
      setMe(response); // 가져온 유저 정보 설정
    } catch (error) {
      console.error('Failed to fetch user information:', error);
    } finally {
      setIsLoading(false); // 데이터 로딩이 완료되었음을 설정
    }
  };

  useEffect(() => {
    const accessToken = getAccessTokenFromCookie();
    if (accessToken) {
      fetchMe(); // 데이터를 가져오는 함수 호출
    } else {
      setIsLoading(false); // 로그인되지 않았으므로 로딩이 완료되었음을 설정
    }
  }, []);

  return { me, isLoading };
};