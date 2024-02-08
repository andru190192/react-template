export enum EAuthErrorMessages {
  INVALID_EMAIL = 'Email format not recognized. Must be in username@domain.com format.',
  INVALID_PASSWORD = 'Password must be at least 8 characters long.',
  INVALID_REGEX_PASSWORD = 'Must be at least 8 characters and contain 1 number, 1 uppercase and 1 lowercase character.',
  REQUIRED_FIELD = 'This field is required.',
  MUST_MATCH_PASSWORD = 'Passwords don’t match.',
  NOT_EXIST_EMAIL = 'The username/email you entered is not connected to an account.',
}
