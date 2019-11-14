package com.example.myapplication.modules

import com.example.myapplication.usecases.game.CreateGameUseCase
import com.example.myapplication.usecases.game.GetGamesByModeUseCase
import com.example.myapplication.usecases.game.GetGamesContainingNameUseCase
import com.example.myapplication.usecases.match.*
import com.example.myapplication.usecases.mode.CreateGameModeUseCase
import com.example.myapplication.usecases.registration.CreateRegistrationUseCase
import com.example.myapplication.usecases.registration.GetAllRegistrationsByMatchUseCase
import com.example.myapplication.usecases.registration.GetRegistrationsByTournamentUseCase
import com.example.myapplication.usecases.registration.GetRegistrationsByUserUseCase
import com.example.myapplication.usecases.tournament.*
import com.example.myapplication.usecases.user.CreateAccountWithEmailAndPasswordUseCase
import com.example.myapplication.usecases.user.GetAccountVerificationStatusUseCase
import com.example.myapplication.usecases.user.GetCurrentUserInfoUseCase
import com.example.myapplication.usecases.user.IsSubscribedAccountUseCase
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object UseCasesModule : KodeinModuleProvider {
    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<GetGamesByModeUseCase>() with singleton { GetGamesByModeUseCase(instance()) }
        bind<GetGamesContainingNameUseCase>() with singleton { GetGamesContainingNameUseCase(instance()) }
        bind<GetTournamentsByGameUseCase>() with singleton { GetTournamentsByGameUseCase(instance()) }
        bind<GetTournamentsByModeUseCase>() with singleton { GetTournamentsByModeUseCase(instance(), instance()) }
        bind<GetTournamentsByModePerPageUseCase>() with singleton { GetTournamentsByModePerPageUseCase(instance()) }
        bind<GetTournamentsContainingTitleUseCase>() with singleton {
            GetTournamentsContainingTitleUseCase(
                instance()
            )
        }
        bind<GetAllAvailableMatchesUseCase>() with singleton {
            GetAllAvailableMatchesUseCase(
                instance(),
                instance()
            )
        }
        bind<GetAllMatchesByUserUseCase>() with singleton {
            GetAllMatchesByUserUseCase(
                instance(),
                instance()
            )
        }
        bind<GetCreatedTournamentsByAdminUseCase>() with singleton {
            GetCreatedTournamentsByAdminUseCase(
                instance(),
                instance()
            )
        }
        bind<GetAvailableMatchesPerPageUseCase>() with singleton { GetAvailableMatchesPerPageUseCase(instance()) }
        bind<GetCurrentUserInfoUseCase>() with singleton { GetCurrentUserInfoUseCase(instance()) }
        bind<GetAccountVerificationStatusUseCase>() with singleton {
            GetAccountVerificationStatusUseCase(
                instance()
            )
        }
        bind<IsSubscribedAccountUseCase>() with singleton { IsSubscribedAccountUseCase(instance()) }
        bind<GetShowCaseTournamentsUseCase>() with singleton { GetShowCaseTournamentsUseCase(instance()) }
        bind<GetMatchesByTournamentUseCase>() with singleton { GetMatchesByTournamentUseCase(instance()) }
        bind<GetAllRegistrationsByMatchUseCase>() with singleton { GetAllRegistrationsByMatchUseCase(instance()) }
        bind<GetRegistrationsByUserUseCase>() with singleton { GetRegistrationsByUserUseCase(instance()) }
        bind<GetRegistrationsByTournamentUseCase>() with singleton {
            GetRegistrationsByTournamentUseCase(
                instance(),
                instance()
            )
        }
        bind<CreateAccountWithEmailAndPasswordUseCase>() with singleton { CreateAccountWithEmailAndPasswordUseCase(instance()) }
        bind<CreateGameModeUseCase>() with singleton { CreateGameModeUseCase(instance()) }
        bind<CreateGameUseCase>() with singleton { CreateGameUseCase(instance()) }
        bind<CreateTournamentUseCase>() with singleton { CreateTournamentUseCase(instance()) }
        bind<CreateMatchUseCase>() with singleton { CreateMatchUseCase(instance()) }
        bind<CreateRegistrationUseCase>() with singleton { CreateRegistrationUseCase(instance()) }
    }
}