import * as Styled from './style';

import Button from '@/components/Button/Button';
import PageTemplate from '@/components/common/PageTamplate';

const MainPage = () => {
  return (
    <PageTemplate>
      <Styled.Root>
        <Button
          variant='contained'
          css={{
            height: '25vh',
            marginBottom: '10px',
            borderRadius: '30px',
            fontSize: '20px',
            backgroundColor: `${Styled.MainBtn}`,
            display: 'none',
          }}
        >
          OO학과 사물함 신청 설정
        </Button>
        <Button
          variant='contained'
          css={{
            height: '25vh',
            marginBottom: '10px',
            borderRadius: '30px',
            fontSize: '20px',
            backgroundColor: `${Styled.MainBtn}`,
            display: 'none',
          }}
        >
          OO학과 사물함 배정하기
        </Button>
        <Styled.MainDiv css={{ marginBottom: '10px' }}>내 사물함 정보</Styled.MainDiv>
        <Button
          variant='outlined'
          css={{ width: '30%', backgroundColor: `${Styled.MainSubmitBtn}` }}
        >
          쉐어하기
        </Button>
      </Styled.Root>
    </PageTemplate>
  );
};

export default MainPage;
