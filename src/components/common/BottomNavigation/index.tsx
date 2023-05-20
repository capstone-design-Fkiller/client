import { NavLink } from 'react-router-dom';

import * as Styled from './style';
import Icon from '../Icon';
import { IconNames } from '../Icon/Icons';

import { useFetchMe } from '@/query/user';
import { PATH } from '@/utils/path';

interface Navigator {
  label: string;
  iconName: IconNames;
  path: string;
}

const BottomNavigation = () => {
  const { me } = useFetchMe();

  const navigator: Navigator[] = [
    {
      label: '사물함',
      iconName: 'box',
      path: me?.is_usermode === false ? PATH.RESULT : PATH.LOCKER,
    },
    {
      label: '홈',
      iconName: 'home',
      path: PATH.MAIN,
    },
    {
      label: '공지사항',
      iconName: 'megaphone',
      path: PATH.NOTICE,
    },
  ];

  return (
    <Styled.Root>
      {navigator.map(({ label, path, iconName }) => (
        <NavLink to={path} key={label} css={Styled.ActiveLink}>
          <Icon iconName={iconName} size='32' />
          <Styled.Label>{label}</Styled.Label>
        </NavLink>
      ))}
    </Styled.Root>
  );
};

export default BottomNavigation;
