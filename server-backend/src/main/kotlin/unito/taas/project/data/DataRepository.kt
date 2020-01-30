package unito.taas.project.data

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.data.rest.core.annotation.RestResource
import org.springframework.format.annotation.DateTimeFormat
import java.time.LocalDateTime

@RepositoryRestResource(path = "game")
interface GameRepository : JpaRepository<GameEntity, String> {

    @RestResource(path = "byGameName")
    fun getGameEntityByGameNameIgnoreCase(gameName: String): GameEntity

    @RestResource(path = "byGameNameStartsWith")
    fun getGameEntitiesByGameNameStartsWithIgnoreCase(gameName: String): List<GameEntity>

    @RestResource(path = "byGameNameContaining")
    fun getGameEntitiesByGameNameContainingIgnoreCase(gameName: String): List<GameEntity>

}

@RepositoryRestResource(path = "tournament")
interface TournamentRepository : JpaRepository<TournamentEntity, Long> {

    @RestResource(path = "byGame")
    fun getTournamentEntitiesByGame(game: GameEntity): List<TournamentEntity>

    @RestResource(path = "byMode")
    fun getTournamentEntitiesByTournamentModeIgnoreCase(tournamentMode: String): List<TournamentEntity>

}

@RepositoryRestResource(path = "match")
interface MatchRepository : JpaRepository<MatchEntity, Long> {

    @RestResource(path = "byTournament")
    fun getMatchEntitiesByTournament(tournament: TournamentEntity): List<MatchEntity>

    @RestResource(path = "byGame")
    fun getMatchEntitiesByTournament_Game(game: GameEntity): List<MatchEntity>

    @RestResource(path = "byMatchDateTimeIsAfter")
    fun getMatchEntitiesByMatchDateTimeIsAfter(
            @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") matchDateTime: LocalDateTime): List<MatchEntity>

    @RestResource(path = "availableMatches")
    fun getMatchEntitiesByMatchDateTimeIsAfterAndTournament_PlayersNumberGreaterThan(
            @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") matchDateTime: LocalDateTime,
            tournament_playersNumber: Int): List<MatchEntity>

    @RestResource(path = "countAvailableMatch")
    fun countByMatchDateTimeIsAfterAndTournament_PlayersNumberGreaterThan(
            @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") matchDateTime: LocalDateTime,
            tournament_playersNumber: Int): Int

}

@RepositoryRestResource(path = "registration")
interface RegistrationRepository : JpaRepository<RegistrationEntity, Long> {

    @RestResource(path = "byNumberRegistration")
    fun countByMatch_Tournament_Id(Match_Tournament_Id: Long): Int

    @RestResource(path = "byNumberRegistration1")
    fun countByMatch_Tournament(Match_Tournament: TournamentEntity): Int

    @RestResource(path = "byMatch")
    fun getRegistrationEntitiesByMatch(Match: MatchEntity): List<RegistrationEntity>

}

@RepositoryRestResource(path = "user")
interface UserRepository : JpaRepository<UserEntity, String>

@RepositoryRestResource(path = "mode")
interface ModeRepository : JpaRepository<ModeEntity, String>