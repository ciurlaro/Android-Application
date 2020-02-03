package unito.taas.project.data

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.data.rest.core.annotation.RestResource

@RepositoryRestResource(path = "game")
interface GameRepository : JpaRepository<SpringGame, String> {

    @RestResource(path = "byGameName")
    fun getGameEntityByGameNameIgnoreCase(gameName: String): SpringGame

    @RestResource(path = "byGameNameStartsWith")
    fun getGameEntitiesByGameNameStartsWithIgnoreCase(gameName: String): List<SpringGame>

    @RestResource(path = "byGameNameContaining")
    fun getGameEntitiesByGameNameContainingIgnoreCase(gameName: String): List<SpringGame>

}

@RepositoryRestResource(path = "tournament")
interface TournamentRepository : JpaRepository<SpringTournament, Long> {

    @RestResource(path = "byGame")
    fun getTournamentEntitiesByGame(springGame: SpringGame): List<SpringTournament>

    @RestResource(path = "byMode")
    fun getTournamentEntitiesByTournamentModeIgnoreCase(tournamentMode: String): List<SpringTournament>

}

@RepositoryRestResource(path = "registration")
interface RegistrationRepository : JpaRepository<SpringRegistration, Long> {

    @RestResource(path = "byTournament")
    fun getRegistrationEntitiesByTournament(springTournament: SpringTournament): List<SpringRegistration>

}

@RepositoryRestResource(path = "user")
interface UserRepository : JpaRepository<SpringUser, String>

@RepositoryRestResource(path = "mode")
interface ModeRepository : JpaRepository<SpringMode, String>