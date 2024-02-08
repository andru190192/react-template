import InputComponent from 'components/molecules/InputComponent';
import { Controller } from 'react-hook-form';

import { ControlledInputProps } from './types';

export const ControlledInput = ({
  name,
  control,
  ...props
}: ControlledInputProps) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState, formState }) => (
      <InputComponent
        keepHelperTextSpace
        {...props}
        id={name}
        variant='outlined'
        name={field.name}
        onBlur={field.onBlur}
        onChange={field.onChange}
        defaultValue={field.value}
        error={!!fieldState.error}
        helperText={
          formState.errors[name]?.message?.toString() ||
          props.helperText?.toString()
        }
      />
    )}
  />
);
