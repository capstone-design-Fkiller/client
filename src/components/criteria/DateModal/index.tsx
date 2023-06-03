import { Modal as MuiModal } from '@mui/material';
import { PropsWithChildren } from 'react';

import * as Styled from './style';

interface ModalProps extends PropsWithChildren {
  title: string;
  open: boolean;
  onClose: () => void;
  className?: string;
}

const DateModal = (props: ModalProps) => {
  const { title, open, onClose, children } = props;

  return (
    <MuiModal aria-labelledby={title} open={open} onClose={onClose}>
      <Styled.Root>{children}</Styled.Root>
    </MuiModal>
  );
};

export default DateModal;
