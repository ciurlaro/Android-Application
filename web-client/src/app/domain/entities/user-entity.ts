export class UserEntity {

  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly nickname: string,
    public readonly isSubscriber: boolean,
    public readonly image?: string
  ) {}
}

