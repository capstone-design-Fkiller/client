import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0 30px;

  &.short {
    margin-bottom: 10px;
  }
`;

export const Content = styled.h3`
  margin-bottom: 10px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ContentTitle = styled.div`
  width: 100%;

  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  border-radius: 5px;
`;

export const ContentBody = styled.div`
  width: 100%;
  height: 250px;
  resize: none;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  border-radius: 5px;

  overflow-y: auto;
  word-wrap: break-word;

  &::-webkit-scrollbar {
    width: 5px;
    background-color: ${({ theme }) => theme.colors.background_2};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary_200};
    border-radius: 10px;
    height: 20px;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  font-size: 12px;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.grey_400};
`;

export const Input = styled.input`
  width: 100%;
  height: auto;

  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  border-radius: 5px;

  &::placeholder {
    font-size: 14px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  resize: none;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.light_grey_100};
  border-radius: 5px;

  &::placeholder {
    font-size: 14px;
  }

  &::-webkit- {
    width: 5px;
    background-color: ${({ theme }) => theme.colors.background_2};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary_200};
    border-radius: 10px;
    height: 20px;
  }
`;
