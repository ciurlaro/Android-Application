import {User} from 'firebase';

export interface AuthUserEntity {
  readonly id: string;
  readonly email: string;
  readonly nickname: string;
}

export function storageImagePathFor(authUser: User): string {
  return `users/${authUser.uid}/profile`;
}
