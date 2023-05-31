import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useCustomParams = <T>() => {
  const [searchParams] = useSearchParams();
  const [qs, setQs] = useState<T>();

  useEffect(() => {
    const curQs = searchParams.get('type') as T;

    setQs(curQs);
  }, [qs, searchParams]);

  return qs;
};

export default useCustomParams;
