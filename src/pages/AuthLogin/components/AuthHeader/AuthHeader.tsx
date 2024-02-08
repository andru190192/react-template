import { Grid, Typography } from '@mui/material';

import { AuthHeaderProps } from './types';
import './styles.scss';

export const AuthHeader = ({
  title,
  subTitle,
  attemptsLeft,
}: AuthHeaderProps) => (
  <Grid container className='b4b-auth-header-container'>
    <Grid item xs marginBottom={2}>
      <Typography variant='h4' fontWeight={700}>
        {title}
      </Typography>
    </Grid>

    <Grid item xs marginBottom={1}>
      <Typography
        variant='body1'
        dangerouslySetInnerHTML={{
          __html: subTitle,
        }}
      />
    </Grid>

    {Boolean(attemptsLeft) && (
      <Grid item xs>
        <Typography variant='caption'>
          For security reasons, after {attemptsLeft} more failed login attempts
          you will have to wait 10 minutes before trying again.
        </Typography>
      </Grid>
    )}
  </Grid>
);

export default AuthHeader;