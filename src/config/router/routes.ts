enum EPublicRoutes {
  INDEX = '/',
  AUTH = '/auth',
}

enum EPrivateRoutes {
  DASHBOARD = '/dashboard',
  COMPANY_SETTINGS = '/company-settings',
}

enum EPublicChildren {
  AUTH_LOGIN = '',
  AUTH_PASSWORD_SETUP = 'password-setup',
  AUTH_PASSWORD_RESET = 'password-reset',
  AUTH_PASSWORD_CREATE = 'password-create',
  AUTH_SUCCESS = 'success',
  AUTH_EXPIRED = 'expired',
  AUTH_LOCKED = 'account-locked',
}

export type TRoutes =
  | EPublicRoutes
  | EPrivateRoutes
  | EPublicChildren;

export const routesPaths = {
  public: EPublicRoutes,
  private: EPrivateRoutes,
  publicChildren: EPublicChildren,
};
