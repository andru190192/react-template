export interface User {
  id: string;
  // name: string;
  // email: string;
  token: string;
  distributor?: boolean;
  initial_password_set_at?: string;
  permissions?: string[];
  verified_at?: string;
}
