import { useContext } from 'react';

import { ToastContext } from '@/components/common/Toast';

const useToast = () => {
  const { createToastMessage } = useContext(ToastContext);

  return {
    createToastMessage,
  };
};

export default useToast;
