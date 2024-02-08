import DashboardIcon from '@mui/icons-material/DashboardOutlined';
import NavbarMenu from 'components/layouts/NavbarMenu';
import { routesPaths } from 'config/router/routes';

export const navbarTabs = [
  {
    label: 'Dashboard',
    value: 0,
    icon: <DashboardIcon />,
    tabPath: routesPaths.private.DASHBOARD,
    className: 'navbar-tab',
  },
  {
    isCustomTab: true,
    renderCustomTab: () => (
      <NavbarMenu value={5} tabClassName='navbar-tab' key={5} />
    ),
  },
];
