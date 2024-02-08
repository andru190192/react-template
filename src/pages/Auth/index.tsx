import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import './styles.scss';
import { Box, Typography } from '@mui/material';

const Auth = () => (
  <Grid container className='b4b-auth-container'>
    <Grid item container xs={12} className='form-container'>
      <Outlet />
    </Grid>

    <Box className='terms-of-service'>
      <Typography variant='body1'>
        Justfund® {`${new Date().getFullYear()}`}
      </Typography>
    </Box>
  </Grid>
);

export default Auth;
