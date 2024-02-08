import {
  Box,
  Button as MUIButton,
  CircularProgress,
  IconButton,
} from '@mui/material';
import { IButtonProps, IIconButtonProps } from './types';

import { LOADING_SIZE } from './constants';
import './styles.scss';

export const Button = ({ children, loading, ...props }: IButtonProps) => {
  const { size } = props;

  return (
    <MUIButton className='loading-button' disabled={loading} {...props}>
      {loading && (
        <CircularProgress
          className='loading'
          size={LOADING_SIZE[size || 'small']}
          color='inherit'
        />
      )}

      <Box className={`container-children ${loading ? 'loading' : ''}`}>
        {children}
      </Box>
    </MUIButton>
  );
};

export default Button;


export const LoadingIconButton = ({
  loading,
  icon,
  ...props
}: IIconButtonProps) => {
  const { size } = props;

  return (
    <IconButton disabled={loading} {...props}>
      {loading ? (
        <CircularProgress
          size={LOADING_SIZE[size || 'small']}
          color='inherit'
        />
      ) : (
        icon
      )}
    </IconButton>
  );
};
