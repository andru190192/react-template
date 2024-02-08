import { describe, expect, it, afterEach, vitest } from 'vitest';
import { cleanup, render } from '@testing-library/react';
import fireEvent from '@testing-library/user-event';
import Button from '.';
import { IButtonProps } from './types';

const clickMock = vitest.fn();

const props: IButtonProps = {
  variant:'contained',
  color:'primary',
  type:'submit',
  children: 'Log in',
} 

describe('<Button />', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render correctly', () => {
    const { container } = render(
      <Button {...props} /> 
    );

    expect(container).toMatchSnapshot();
  });

  it('Should dispatch click callback', async () => {
    const { getByText } = render(
      <Button {...props} onClick={clickMock} />
    );

    const loginBtn = getByText('Log in');

    await fireEvent.click(loginBtn);
    
    expect(loginBtn).toBeTruthy();
    expect(clickMock).toBeCalled();
  });
});
