package com.example.myapplication.modules

import com.example.myapplication.usecases.match.GetAllAvailableMatchesUseCase
import com.example.myapplication.usecases.match.GetAllMatchesByUserUseCase
import com.example.myapplication.usecases.match.GetAvailableMatchesPerPage
import com.example.myapplication.usecases.match.GetMatchesByTournament
import com.example.myapplication.usecases.registration.GetAllRegistrationsByMatch
import com.example.myapplication.usecases.registration.GetRegistrationsByTournamentUseCase
import com.example.myapplication.usecases.tournament.GetCreatedTournamentsByAdmin
import com.example.myapplication.usecases.tournament.GetShowCaseTournaments
import com.example.myapplication.usecases.user.GetUserInfoUseCase
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object UseCasesModule : KodeinModuleProvider {
    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<GetAllAvailableMatchesUseCase>() with singleton {
            GetAllAvailableMatchesUseCase(
                instance(),
                instance()
            )
        }
        bind<GetAllMatchesByUserUseCase>() with singleton { GetAllMatchesByUserUseCase(instance()) }
        bind<GetCreatedTournamentsByAdmin>() with singleton { GetCreatedTournamentsByAdmin(instance()) }
        bind<GetAvailableMatchesPerPage>() with singleton { GetAvailableMatchesPerPage(instance()) }
        bind<GetUserInfoUseCase>() with singleton { GetUserInfoUseCase(instance()) }
        bind<GetShowCaseTournaments>() with singleton { GetShowCaseTournaments(instance()) }
        bind<GetMatchesByTournament>() with singleton { GetMatchesByTournament(instance()) }
        bind<GetAllRegistrationsByMatch>() with singleton { GetAllRegistrationsByMatch(instance()) }
        bind<GetRegistrationsByTournamentUseCase>() with singleton { GetRegistrationsByTournamentUseCase(instance(), instance()) }



    }
}