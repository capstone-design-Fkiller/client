import { Style } from '@mui/icons-material';
import { Box } from '@mui/material';
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
        //경로 임의 설정
        path: PATH.NOTICE,
      },
      {
        label: 'Profile',
        iconName: 'user',
        //경로 임의 설정
        path: PATH.APPLY,
      },
    ],
  };

  return (
    <Styled.Root>
      <Box css={Styled.LogoStyle}>
        {/* 이렇게 말고 PATH.MAIN 이런 식으로 표기하는 게 좋은지 고민 */}
        <Link to={logoBox.items[0].path}>
          <Icon iconName={logoBox.items[0].iconName} size='40' />
        </Link>
      </Box>
      <Box css={Styled.IconStyle}>
        <Link to={iconBox.items[0].path}>
          <Icon iconName={iconBox.items[0].iconName} size='40' />
        </Link>
        <Link to={iconBox.items[1].path}>
          <Icon iconName={logoBox.items[1].iconName} size='40' />
        </Link>
      </Box>
    </Styled.Root>
  );
};

export default Header;
