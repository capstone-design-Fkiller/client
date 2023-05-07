import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MouseEvent, Dispatch, SetStateAction } from 'react';

import Button from '@/components/common/Button';

interface ModalWrapperProps {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  handleModalOpen: Dispatch<SetStateAction<boolean>>;
  list: readonly string[];
}

const ModalWrapper = (props: ModalWrapperProps) => {
  const { state, setState, handleModalOpen, list } = props;

  const handleModalInnerClick = (
    e: MouseEvent<HTMLButtonElement>,
    state: string,
    setState: Dispatch<SetStateAction<typeof state>>
  ) => {
    const innerText = e.currentTarget.innerText;

    if (state === innerText) return;

    setState(innerText);
    handleModalOpen(false);
  };

  return (
    <>
      <h1>원하는 항목을 선택해주세요.</h1>
      <Styled.Root>
        {list.map(item => (
          <Button
            key={item}
            onClick={e => handleModalInnerClick(e, state, setState)}
            css={Styled.ExtendedButton}
            variant={state === item ? 'contained' : 'outlined'}
          >
            {item}
          </Button>
        ))}
      </Styled.Root>
    </>
  );
};

export default ModalWrapper;

const Styled = {
  Root: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    margin: 30px 0;
  `,
  ExtendedButton: css`
    width: 100%;
    aspect-ratio: 1;
    border: 1px solid;
  `,
};
