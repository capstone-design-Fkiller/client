import { useState } from 'react';

const useModal = (initial = false) => {
  const [open, setOpen] = useState(initial);
  const handleOpen = () => setOpen(!open);

  return { open, handleOpen, setOpen };
};

export default useModal;
