import { ChangeEvent, useCallback, useState } from 'react';

const useInput = <T>(initValue: T) => {
  const [value, setValue] = useState<T>(initValue);

  const handleValue = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value as T);
  }, []);

  return { value, handleValue, setValue };
};

export default useInput;
