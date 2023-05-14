import styled from '@emotion/styled';

export const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.3s ease-in-out;
  cursor: pointer;

  padding: 0 10px;

  & .flipped {
    transform: rotateX(180deg);
  }
`;

export const ApplyInfo = styled.h1``;

export const DropdownList = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;

  position: absolute;
  width: 100%;
  margin: 10px 0;
  font-size: 14px;
  padding: 10px 0;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.light_grey_200};

  background-color: ${({ theme }) => theme.colors.white_300};
  overflow: hidden;
  z-index: 999;
`;

export const DropdownItem = styled.li`
  position: relative;
  padding: 10px 10px;
  margin: 0 10px;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light_grey_100};
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  }

  /* &:not(:last-of-type)::after {
    content: '';
    width: 95%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.light_grey_100};
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 2.5%;
  } */
`;
