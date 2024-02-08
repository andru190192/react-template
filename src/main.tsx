import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from 'context/authContext';
import { queryClient } from 'config/react-query/index.ts';
import router from 'config/router';
import theme from 'config/styles/theme';
import { Compose, IComposeProps } from 'utils';
import './index.css'

const providers: IComposeProps['providers'] = [
  [QueryClientProvider, { client: queryClient }],
  [ThemeProvider, { theme: theme }],
  [AuthContextProvider],
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <Compose providers={providers}>
      <RouterProvider router={router} />
    </Compose>
  </React.StrictMode>,
)
