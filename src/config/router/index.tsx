import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

import App from 'App';
import { routesPaths } from './routes';
import PrivateRoute from 'components/layouts/PrivateRoute';
import PublicRoute from 'components/layouts/PublicRoute';
import Auth from 'pages/Auth';
import AuthLogin from 'pages/AuthLogin';
import Dashboard from 'pages/Dashboard';

const publicRoutes: RouteObject[] = [
  {
    path: routesPaths.public.INDEX,
    element: <Navigate to={routesPaths.public.AUTH} />,
  },
  {
    path: routesPaths.public.AUTH,
    element: <Auth />,
    children: [
      {
        path: routesPaths.publicChildren.AUTH_LOGIN,
        element: <AuthLogin />,
      },
    ],
  },
];

const privateRoutes: RouteObject[] = [
  {
    path: routesPaths.private.DASHBOARD,
    element: <Dashboard />,
  },
];

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <PublicRoute />,
        children: publicRoutes,
      },
      {
        element: <PrivateRoute />,
        children: privateRoutes,
      },
    ],
  },
]);

export default router;
