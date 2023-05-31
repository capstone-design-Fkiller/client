import styled from '@emotion/styled';

const Toggle = () => {
  return (
    <Styled.Root className='onoff-switch-container'>
      <input type='checkbox' name='onoff-switch' id='onoff-switch1' />
      <label htmlFor='onoff-switch1'>자동로그인</label>
    </Styled.Root>
  );
};

export default Toggle;

const Styled = {
  Root: styled.div`
    display: inline-block;
    width: 140px;
    height: 30px;
    position: relative;

    & input[type='checkbox'] {
      position: absolute;
      width: 0px;
      height: 0px;
      overflow: hidden;
    }
    & label {
      padding-left: 70px;
      line-height: 30px;
      font-size: 16px;
    }
    & label::after {
      position: absolute;
      top: 3px;
      left: 4px;
      content: '';
      width: 24px;
      height: 24px;
      background: #d1d1d1;
      border-radius: 100%;
      transition: all 0.3s;
    }
    & label::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 60px;
      height: 30px;
      border: 1px solid #d1d1d1;
      border-radius: 20px;
      background: #f1f1f1;
      box-sizing: border-box;
    }
    & input[type='checkbox']:checked + label::after {
      transform: translateX(28px);
      background: gold;
    }
    & input[type='checkbox']:checked + label::before {
      background: #fff;
    }
  `,
};
