import { UserPrivilege } from './user-privilege';

export type UserQuery = {
  id?: string | string[];
  username?: string | string[];
  email?: string | string[];
  firstName?: string;
  lastName?: string;
  privileges?: Partial<Record<UserPrivilege, boolean>>;
};
