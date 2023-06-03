import styled from '@emotion/styled';

export const TableContainer = styled.table`
  width: 100%;

  margin-top: 15px;
  border-collapse: collapse;
  & tr > td,
  & tr > th {
    padding: 10px 5px;
    white-space: nowrap;

    &:first-of-type {
      padding-left: 10px;
    }
  }

  & tbody tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  }
`;

export const Wrapper = styled.div`
  width: 340px;
  overflow-x: scroll;

  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.background_2};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary_100};
    border-radius: 10px;
    height: 5px;
  }
`;

export const Message = styled.h1`
  display: flex;
  font-size: 18px;
  justify-content: center;
  margin: 150px 0;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 80%;
  font-size: 16px;

  p {
    margin-bottom: 15px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
