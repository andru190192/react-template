import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import {  RouterProvider } from 'react-router-dom';
import { queryClient } from 'config/react-query/index.ts';
import router from 'config/router';

export const renderWithProviders = (children: ReactNode, initialState = {}) => {

  return {
    ...render(
      <QueryClientProvider client={queryClient}>
        
          
          children
        
      </QueryClientProvider>,
    ),
  };
};
