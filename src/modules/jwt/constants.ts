export const JwtAdminServiceSymbol = Symbol.for('JwtAdminService');
export const JwtGlobalServiceSymbol = Symbol.for('JwtGlobalService');

export enum JwtAccessType {
  ADMIN = 'jwt-admin',
  GLOBAL = 'jwt-global',
}

export const IS_ADMIN_KEY = 'isAdmin';
export const IS_PUBLIC_KEY = 'isPublic';
