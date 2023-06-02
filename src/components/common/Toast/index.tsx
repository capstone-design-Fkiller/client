/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Alert, Snackbar, Stack } from '@mui/material';
import { PropsWithChildren, createContext, useState } from 'react';

type StateOption = 'success' | 'error';

type ToastContextType = {
  createToastMessage: (message: string, state: StateOption) => void;
};

export const ToastContext = createContext<ToastContextType>({
  createToastMessage: (message, state) => {},
});

const ToastProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const [{ open, message, state }, setToastState] = useState<{
    open: boolean;
    message: string;
    state: 'success' | 'error';
  }>({
    open: false,
    message: '',
    state: 'success',
  });

  const createToastMessage = (message: string, state: StateOption) => {
    setToastState({
      message,
      state,
      open: true,
    });
  };

  const handleClose = () => {
    setToastState(prev => ({ ...prev, open: false }));
  };

  return (
    <ToastContext.Provider value={{ createToastMessage }}>
      {children}
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={state}
            sx={{ minWidth: '300px', maxWidth: '340px', width: '80%', marginTop: '20%', fontFamily: 'NanumSquare' }}
          >
            {message}
          </Alert>
        </Snackbar>
      </Stack>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
