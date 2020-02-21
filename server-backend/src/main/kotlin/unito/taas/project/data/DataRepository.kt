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

    @RestResource(path = "byTitleContaining")
    fun getTournamentEntitiesByTitleContainingIgnoreCase(title: String): List<TournamentEntity>

}

@RepositoryRestResource(path = "registration")
interface RegistrationRepository : JpaRepository<RegistrationEntity, Long> {

//    @RestResource(path = "byNumberRegistration")
//    fun countByMatch_Tournament_Id(Match_Tournament_Id: Long): Int
//
//    @RestResource(path = "byNumberRegistration1")
//    fun countByMatch_Tournament(Match_Tournament: TournamentEntity): Int

}

@RepositoryRestResource(path = "mode")
interface ModeRepository : JpaRepository<ModeEntity, String>