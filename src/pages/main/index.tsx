import * as Styled from './style';

// import Button from '@/components/common/Button';
import AdminButton from '@/components/Button/AdminButton';
import SubmitButton from '@/components/Button/UserButton';
import PageTemplate from '@/components/common/PageTamplate';

const MainPage = () => {
  return (
    <PageTemplate>
      <Styled.Root>
        <AdminButton
          variant='contained'
          css={{
            width: '350px',
            height: '150px',
            marginBottom: '10px',
            display: 'none',
          }}
        >
          OO학과 사물함 신청 설정
        </AdminButton>
        <AdminButton variant='contained' css={{ width: '350px', height: '150px', display: 'none' }}>
          OO학과 사물함 배정하기
        </AdminButton>
        <Styled.MainDiv css={{ marginBottom: '10px' }}>내 사물함 정보</Styled.MainDiv>
        <SubmitButton variant='outlined'>쉐어하기</SubmitButton>
        {/* <div>페이지 템플릿을 활용해봅니다.</div>
        <Button variant='contained'>Primary</Button>
        <hr />
        <Button variant='contained'>Primary</Button>
        <Button variant='outlined'>outlined</Button>
        <Button variant='contained' color='secondary'>
          Secondary
        </Button>
        <Button variant='contained' color='error'>
          Error
        </Button>
        <Button variant='contained' color='warning' css={{ color: 'white' }}>
          Error
        </Button> */}
      </Styled.Root>
    </PageTemplate>
  );
};

export default MainPage;
