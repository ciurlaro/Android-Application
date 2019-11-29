package com.example.myapplication.modules

import io.ktor.client.HttpClient
import io.ktor.client.engine.mock.MockEngine
import io.ktor.client.engine.mock.respond
import io.ktor.client.features.json.JsonFeature
import io.ktor.client.features.json.serializer.KotlinxSerializer
import io.ktor.client.request.HttpRequestData
import io.ktor.http.*
import org.kodein.di.DKodein
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object CommonMockModule : KodeinModuleProvider {

    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<HttpClient>(overrides = true) with singleton {
            HttpClient(MockEngine) {
                install(JsonFeature) {
                    serializer = KotlinxSerializer()
                }
                engine {
                    addHandler {
                        handleMockEngineRequest(it, dkodein)
                    }
                }
            }
        }
    }

    private fun respondJsonFromRawResources(jsonName: String, dKodein: DKodein) = respond(
        dKodein.instance<String>(tag = jsonName),
        headers = headersOf(HttpHeaders.ContentType to listOf(ContentType.Application.Json.toString()))
    )

    private fun buildMockEngineError(request: HttpRequestData): Nothing =
        error("$request cannot be handled by the mock engine")

    private fun handleMockEngineRequest(request: HttpRequestData, dKodein: DKodein) =
        when (request.url.fullPath) {
            "/game" ->
                if (request.method == HttpMethod.Get)
                    respondJsonFromRawResources("multiple_game_responses", dKodein)
                else
                    respondJsonFromRawResources("single_game_response", dKodein)
            "/game/COD" ->
                respondJsonFromRawResources("single_game_response", dKodein)
            "/game/search/byGameName" ->
                respondJsonFromRawResources("single_game_response", dKodein)
            "/game/search/byMode?available_modes_mode_name=Free4All&page=0" ->
                respondJsonFromRawResources("multiple_game_responses", dKodein)
            "/game/search/byMode?available_modes_mode_name=Free4All&page=1" ->
                respondJsonFromRawResources("multiple_game_responses", dKodein)
            "/game/search/containingGameName?gameName=COD&page=0" ->
                respondJsonFromRawResources("multiple_game_responses", dKodein)
            "/game/search/containingGameName?gameName=COD&page=1" ->
                respondJsonFromRawResources("multiple_game_responses", dKodein)
            "/game?name=&availableModes&image&icon" ->
                respondJsonFromRawResources("single_game_response", dKodein)
            "/mode" -> if (request.method == HttpMethod.Get)
                respondJsonFromRawResources("multiple_game_modes_response", dKodein)
            else
                respondJsonFromRawResources("single_game_mode_response", dKodein)
            "/tournament/1/game" -> respondJsonFromRawResources("single_game_response", dKodein)
            "/tournament" -> if (request.method == HttpMethod.Get)
                respondJsonFromRawResources("multiple_tournaments_response", dKodein)
            else
                respondJsonFromRawResources("single_tournament_response", dKodein)

            "/tournament/1" -> respondJsonFromRawResources("single_tournament_response", dKodein)
            "/tournament/2" -> respondJsonFromRawResources("single_tournament_response", dKodein)
            "/tournament/2/game" -> respondJsonFromRawResources("single_game_response", dKodein)
            "/tournament/2/admin" -> respondJsonFromRawResources("single_user_response", dKodein)
            "/tournament/search/byMode" -> respondJsonFromRawResources("multiple_tournaments_response", dKodein)
            "/tournament/search/byGame" -> respondJsonFromRawResources("multiple_tournaments_response", dKodein)
            "/tournament/search/byGame?game=Cesare_1&page=0" -> respondJsonFromRawResources(
                "multiple_tournaments_response",
                dKodein
            )
            "/tournament/search/byGame?game=Cesare_1&page=1" -> respondJsonFromRawResources(
                "multiple_tournaments_response",
                dKodein
            )
            "/tournament/search/byName" -> respondJsonFromRawResources("multiple_tournaments_response", dKodein)
            "/tournament/search/byShowCase?page=0" -> respondJsonFromRawResources(
                "multiple_tournaments_response",
                dKodein
            )
            "/tournament/search/byShowCase?page=1" -> respondJsonFromRawResources(
                "multiple_tournaments_response",
                dKodein
            )
            "/tournament/search/byGame?gameName=wow&page=0" -> respondJsonFromRawResources(
                "multiple_tournaments_response",
                dKodein
            )
            "/tournament/search/byGame?gameName=wow&page=1" -> respondJsonFromRawResources(
                "multiple_tournaments_response",
                dKodein
            )
            "/tournament/search/byUserId?admin=Cesare_1&page=0" -> respondJsonFromRawResources(
                "multiple_tournaments_response",
                dKodein
            )
            "/tournament/search/byUserId?admin=Cesare_1&page=1" -> respondJsonFromRawResources(
                "multiple_tournaments_response",
                dKodein
            )
            "/tournament/search/byMode?tournamentMode=F4A&page=0" -> respondJsonFromRawResources(
                "multiple_tournaments_response",
                dKodein
            )
            "/tournament/search/byMode?tournamentMode=F4A&page=1" -> respondJsonFromRawResources(
                "multiple_tournaments_response",
                dKodein
            )
            "/tournament/search/containingTitle?title=42&page=0" -> respondJsonFromRawResources(
                "multiple_tournaments_response",
                dKodein
            )
            "/tournament/search/containingTitle?title=42&page=1" -> respondJsonFromRawResources(
                "multiple_tournaments_response",
                dKodein
            )
            "/match/1/tournament" -> respondJsonFromRawResources("single_tournament_response", dKodein)
            "/match/2/tournament" -> respondJsonFromRawResources("single_tournament_response", dKodein)
            "/match" ->
                if (request.method == HttpMethod.Get) {
                    respondJsonFromRawResources("multiple_matches_response", dKodein)
                } else {
                    respondJsonFromRawResources("single_match_response", dKodein)
                }
            "/match/1" -> respondJsonFromRawResources("single_match_response", dKodein)
            "/match/2" -> respondJsonFromRawResources("single_match_response", dKodein)
            "/match/3" -> respondJsonFromRawResources("single_match_response", dKodein)
            "/match/42" -> respondJsonFromRawResources("single_match_response", dKodein)
            "/match/search/byTournament" -> respondJsonFromRawResources("multiple_matches_response", dKodein)
            "/match/search/byTournamentId" -> respondJsonFromRawResources("multiple_matches_response", dKodein)
            "/match/search/byTournamentId?tournamentId=42&page=1" -> respondJsonFromRawResources(
                "multiple_matches_response",
                dKodein
            )
            "/match/search/byTournamentId?tournamentId=1&page=0" -> respondJsonFromRawResources(
                "multiple_matches_response",
                dKodein
            )
            "/match/search/byTournamentId?tournamentId=1&page=1" -> respondJsonFromRawResources(
                "multiple_matches_response",
                dKodein
            )
            "/match/search/byGame" -> respondJsonFromRawResources("multiple_matches_response", dKodein)
            "/match/search/byGameId" -> respondJsonFromRawResources("multiple_matches_response", dKodein)
            "/match/search/byMatchDateTimeIsAfter" -> respondJsonFromRawResources("multiple_matches_response", dKodein)
            "/match/search/availableMatches?page=0" -> respondJsonFromRawResources("multiple_matches_response", dKodein)
            "/match/search/notFull" -> respondJsonFromRawResources("multiple_matches_response", dKodein)
            "/match/search/byUserId?userId=Cesare_1&page=0" -> respondJsonFromRawResources(
                "multiple_matches_response",
                dKodein
            )
            "/match/search/byUserId?userId=Cesare_1&page=1" -> respondJsonFromRawResources(
                "multiple_matches_response",
                dKodein
            )
            "/match/search/byTournamentId?tournamentId=42&page=0" -> respondJsonFromRawResources(
                "multiple_matches_response",
                dKodein
            )
            "/match/search/byTournamentId?tournamentId=2&page=0" -> respondJsonFromRawResources(
                "multiple_matches_response",
                dKodein
            )
            "/registration/1/match" -> respondJsonFromRawResources("single_match_response", dKodein)
            "/registration/2/match" -> respondJsonFromRawResources("single_match_response", dKodein)
            "/registration/3/match" -> respondJsonFromRawResources("single_match_response", dKodein)
            "/registration" -> if (request.method == HttpMethod.Get)
                respondJsonFromRawResources("multiple_registrations_response", dKodein)
            else
                respondJsonFromRawResources("single_registration_response", dKodein)

            "/registration/1" -> respondJsonFromRawResources("single_registration_response", dKodein)
            "/registration/2" -> respondJsonFromRawResources("single_registration_response", dKodein)
            "/registration/3" -> respondJsonFromRawResources("single_registration_response", dKodein)
            "/registration/search/byUserId" -> respondJsonFromRawResources("multiple_registrations_response", dKodein)
            "/registration/search/byMatchId" -> respondJsonFromRawResources("multiple_registrations_response", dKodein)
            "/registration/search/byMatchId?matchId=1&page=0" -> respondJsonFromRawResources(
                "multiple_registrations_response",
                dKodein
            )
            "/registration/search/byMatchId?matchId=1&page=1" -> respondJsonFromRawResources(
                "multiple_registrations_response",
                dKodein
            )

            "/registration/search/byUserId?userId=User&page=0" -> respondJsonFromRawResources(
                "multiple_registrations_response",
                dKodein
            )
            "/registration/search/byUserId?userId=User&page=1" -> respondJsonFromRawResources(
                "multiple_registrations_response",
                dKodein
            )


            "/createUser" -> respondJsonFromRawResources("single_user_response", dKodein)
            "/currentUser" -> respondJsonFromRawResources("single_user_response", dKodein)
            "/user/Cesare_1" -> respondJsonFromRawResources("single_user_response", dKodein)
            "/user/Lamba_2" -> respondJsonFromRawResources("single_user_response", dKodein)
            "/user/Beppe_3" -> respondJsonFromRawResources("single_user_response", dKodein)
            "/user/search/byMatch" -> respondJsonFromRawResources("multiple_users_response", dKodein)
            "/user/search/byMatchId" -> respondJsonFromRawResources("multiple_users_response", dKodein)
            "/registration/1/user" -> respondJsonFromRawResources("single_user_response", dKodein)
            "/registration/2/user" -> respondJsonFromRawResources("single_user_response", dKodein)
            "/registration/3/user" -> respondJsonFromRawResources("single_user_response", dKodein)
            "/tournament/1/admin" -> respondJsonFromRawResources("single_user_response", dKodein)
            "/isAccountVerified" -> respondJsonFromRawResources("verification_status_response", dKodein)
            "/isAccountSubscribed" -> respondJsonFromRawResources("subscription_status_response", dKodein)

            else -> buildMockEngineError(request)
        }
}
