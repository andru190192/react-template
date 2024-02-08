import { Box, Grid, Typography } from '@mui/material';

import './styles.scss';

const Dashboard = () => {

  return (
    <Box className='main-container'>
      <Grid container className='title-container sticky'>
        <Grid item xs={12} md={6}>
          <Typography variant='h1'>30 Day Live Business Report</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
