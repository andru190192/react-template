import { FormHelperText, TextField } from '@mui/material';
import { IInputComponentProps } from './types';

const InputComponent = ({
  helperText,
  keepHelperTextSpace = false,
  ...props
}: IInputComponentProps) => {
  const { error } = props;

  return (
    <>
      <TextField
        fullWidth
        InputLabelProps={{ shrink: true }}
        {...props}
        helperText=''
      />

      {keepHelperTextSpace && (
        <FormHelperText error={error}>{helperText || ''}</FormHelperText>
      )}
    </>
  );
};

export default InputComponent;
