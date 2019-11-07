package com.example.myapplication.modules

import com.example.myapplication.usecases.game.JsCreateGame
import com.example.myapplication.usecases.game.JsGetGamesByMode
import com.example.myapplication.usecases.game.JsGetGamesContainingName
import com.example.myapplication.usecases.match.JsCreateMatch
import com.example.myapplication.usecases.match.JsGetAllAvailableMatches
import com.example.myapplication.usecases.match.JsGetAllMatchesByUser
import com.example.myapplication.usecases.match.JsGetMatchesByTournament
import com.example.myapplication.usecases.mode.JsCreateGameMode
import com.example.myapplication.usecases.registration.JsCreateRegistration
import com.example.myapplication.usecases.registration.JsGetAllRegistrationsByMatch
import com.example.myapplication.usecases.registration.JsGetRegistrationsByTournament
import com.example.myapplication.usecases.registration.JsGetRegistrationsByUser
import com.example.myapplication.usecases.tournament.*
import com.example.myapplication.usecases.user.JsCreateUser
import com.example.myapplication.usecases.user.JsGetAccountVerificationStatus
import com.example.myapplication.usecases.user.JsGetUserInfo
import com.example.myapplication.usecases.user.JsIsSubscribedAccount
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object JsUseCasesModule : KodeinModuleProvider {
    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<JsCreateGame>() with singleton { JsCreateGame(instance()) }
        bind<JsGetGamesByMode>() with singleton { JsGetGamesByMode(instance()) }
        bind<JsGetGamesContainingName>() with singleton { JsGetGamesContainingName(instance()) }


        bind<JsCreateGameMode>() with singleton { JsCreateGameMode(instance()) }

        bind<JsCreateMatch>() with singleton { JsCreateMatch(instance()) }
        bind<JsGetAllAvailableMatches>() with singleton { JsGetAllAvailableMatches(instance()) }
        bind<JsGetAllMatchesByUser>() with singleton { JsGetAllMatchesByUser(instance()) }
        bind<JsGetMatchesByTournament>() with singleton { JsGetMatchesByTournament(instance()) }

        bind<JsCreateRegistration>() with singleton { JsCreateRegistration(instance()) }
        bind<JsGetAllRegistrationsByMatch>() with singleton { JsGetAllRegistrationsByMatch(instance()) }
        bind<JsGetRegistrationsByTournament>() with singleton { JsGetRegistrationsByTournament(instance()) }
        bind<JsGetRegistrationsByUser>() with singleton { JsGetRegistrationsByUser(instance()) }

        bind<JsCreateTournament>() with singleton { JsCreateTournament(instance()) }
        bind<JsGetShowcaseTournaments>() with singleton { JsGetShowcaseTournaments(instance()) }
        bind<JsGetTournamentsByGame>() with singleton { JsGetTournamentsByGame(instance()) }
        bind<JsGetTournamentsByMode>() with singleton { JsGetTournamentsByMode(instance()) }
        bind<JsGetTournamentsContainingTitle>() with singleton { JsGetTournamentsContainingTitle(instance()) }
        bind<JsGetCreatedTournamentsByAdmin>() with singleton { JsGetCreatedTournamentsByAdmin(instance()) }

        bind<JsCreateUser>() with singleton { JsCreateUser(instance()) }
        bind<JsGetUserInfo>() with singleton { JsGetUserInfo(instance()) }
        bind<JsIsSubscribedAccount>() with singleton { JsIsSubscribedAccount(instance()) }
        bind<JsGetAccountVerificationStatus>() with singleton { JsGetAccountVerificationStatus(instance()) }
    }
}

