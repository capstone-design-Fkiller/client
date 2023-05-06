import Bell from './Bell';
import Email from './Email';
import Home from './Home';
import Left from './Left';
import Locker from './Locker';
import Megaphone from './Megaphone';
import Right from './Right';
import Share from './Share';
import User from './User';

const iconName = {
  home: Home,
  email: Email,
  bell: Bell,
  share: Share,
  user: User,
  locker: Locker,
  megaphone: Megaphone,
  left: Left,
  right: Right,
};

export type IconNames = keyof typeof iconName;

export default iconName;
