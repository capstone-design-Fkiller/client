import React from 'react';
import { Link } from 'react-router-dom';

import * as Styled from './style';
import Icon from '../Icon';
import { IconNames } from '../Icon/Icons';

import { PATH } from '@/utils/path';

interface TopNaviagator {
  label: string;
  iconName: IconNames;
  path: string;
}

const topNavigator: TopNaviagator[] = [
  {
    label: '로고',
    iconName: 'home',
    path: PATH.MAIN,
  },
  {
    label: '알림',
    iconName: 'bell',
    path: PATH.NOTICE,
  },
  {
    label: '쪽지',
    iconName: 'email',
    path: PATH.MAIN,
  },
];

const Header = () => {
  return (
    <Styled.Root>
      {topNavigator.map(({ label, path, iconName }) => (
        <Link to={path} key={label} css={Styled.ActiveLink}>
          <Icon iconName={iconName} size='40' />
        </Link>
      ))}
    </Styled.Root>
  );
};

export default Header;
