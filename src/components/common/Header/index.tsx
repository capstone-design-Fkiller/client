import React from 'react';
import { Link } from 'react-router-dom';

import * as Styled from './style';

import Icon from '@/components/common/Icon';
import { IconNames } from '@/components/common/Icon/Icons';
import { PATH } from '@/utils/path';
interface BoxItem {
  label: string;
  iconName: IconNames;
  path: string;
}

interface BoxProps {
  label: string;
  items: BoxItem[];
}

const Header = () => {
  const logoBox: BoxProps = {
    label: '로고',
    items: [
      {
        label: 'Logo',
        //임시로 홈 이모지로 설정
        iconName: 'home',
        path: PATH.MAIN,
      },
    ],
  };

  const iconBox: BoxProps = {
    label: '아이콘 모음',
    items: [
      {
        label: 'Email',
        iconName: 'email',
        //나중에 모달이랑 연결 필요
        path: PATH.NOTICE,
      },
      {
        label: 'Profile',
        iconName: 'user',
        //임시로 프로필 버튼 공지 화면으로 연결
        path: PATH.NOTICE,
      },
    ],
  };

  return (
    <Styled.Root>
      <Link to={logoBox.items[0].path} css={Styled.LogoStyle}>
        <Icon iconName={logoBox.iconName} size='40' />
      </Link>
    </Styled.Root>
  );
};

export default Header;
