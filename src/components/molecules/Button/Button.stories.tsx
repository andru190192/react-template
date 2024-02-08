import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import { IButtonProps } from './types';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    variant:'contained',
    color:'primary',
    type:'submit',
    children: 'Text'
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Example = ({  ...props }: IButtonProps) => {
  const handleClick = () => action(`is onClick`)();
  return (
      <Button {...props} onClick={handleClick} />
  );
};
