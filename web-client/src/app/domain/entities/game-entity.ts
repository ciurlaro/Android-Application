export class GameEntity {

  constructor(
    public readonly name: string,
    public readonly availableModes: string[],
    public readonly image: string,
    public readonly icon: string,
    public readonly iconSvg: string
  ) {}
}
