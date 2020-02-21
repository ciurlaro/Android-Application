export interface CreateTournamentJSON {
  readonly playersNumber: number;
  readonly title: string;
  readonly tournamentDescription: string;
  readonly tournamentMode: string;
  readonly admin: string;
  readonly game: string;
}
