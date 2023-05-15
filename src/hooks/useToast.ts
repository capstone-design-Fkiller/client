import { useContext } from 'react';

import { ToastContext } from '@/components/common/Toast';

const useToast = () => {
  const { setCurrentMessage, setCurrentState, handleOpen } = useContext(ToastContext);

  return {
    setCurrentMessage,
    setCurrentState,
    handleOpen,
  };
};

export default useToast;
