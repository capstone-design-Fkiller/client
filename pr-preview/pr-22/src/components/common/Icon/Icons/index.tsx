import Bell from './Bell';
import Email from './Email';
import Home from './Home';
import Locker from './Locker';
import Megaphone from './Megaphone';
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
};

export type IconNames = keyof typeof iconName;

export default iconName;
