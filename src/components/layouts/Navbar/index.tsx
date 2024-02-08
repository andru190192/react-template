import JustFundLogo from 'assets/images/react.svg';

import './styles.scss';
import { Box } from '@mui/material';
import useNavigateHome from 'hooks/useNavigateHome';

const Navbar = () => {
  const { navigateHome } = useNavigateHome();

  return (
    <Box className='app-main-navbar'>
      <img
        className='justfund-logo'
        src={JustFundLogo}
        alt='Justfund'
        onClick={navigateHome}
      />
      
    </Box>
  );
};

export default Navbar;
