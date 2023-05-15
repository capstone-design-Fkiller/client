/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Alert, Snackbar, Stack } from '@mui/material';
import { PropsWithChildren, createContext, useState } from 'react';

type StateOption = 'success' | 'error';

export const ToastContext = createContext({
  setCurrentMessage: (message: string) => {},
  setCurrentState: (state: StateOption) => {},
  handleOpen: () => {},
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

  // const [open, setOpen] = useState(false);
  // const [message, setMessage] = useState('');
  // const [state, setState] = useState<StateOption>('success');

  const setCurrentMessage = (currentMessage: string) => {
    setToastState(prev => ({ ...prev, message: currentMessage }));
  };
  const setCurrentState = (currentState: StateOption) => {
    setToastState(prev => ({ ...prev, state: currentState }));
  };
  const handleOpen = () => {
    setToastState(prev => ({ ...prev, open: true }));
  };

  // const handleToastState = (changed: {
  //   open: boolean;
  //   message: string;
  //   state: 'success' | 'error';
  // }) => {
  //   setToastState(prev => ({...prev, }))
  // };

  const handleClose = () => {
    setToastState(prev => ({ ...prev, open: false }));
  };

  return (
    <ToastContext.Provider value={{ setCurrentMessage, setCurrentState, handleOpen }}>
      {children}
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={state}
            sx={{ width: '100%', fontFamily: 'NanumSquare' }}
          >
            {message}
          </Alert>
        </Snackbar>
      </Stack>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
