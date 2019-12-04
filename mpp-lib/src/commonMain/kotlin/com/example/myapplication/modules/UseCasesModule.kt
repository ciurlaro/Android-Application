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
import com.example.myapplication.usecases.user.creation.CreateAccountWithCompleteInformation
import com.example.myapplication.usecases.user.creation.CreateAccountWithEmailAndPasswordUseCase
import com.example.myapplication.usecases.user.creation.CreateAccountWithFacebookToken
import com.example.myapplication.usecases.user.creation.CreateAccountWithGoogleToken
import com.example.myapplication.usecases.user.info.GetCurrentUserInfoUseCase
import com.example.myapplication.usecases.user.login.SigninUserUseCase
import com.example.myapplication.usecases.user.update.UpdateUserEmailUseCase
import com.example.myapplication.usecases.user.update.UpdateUserNicknameUseCase
import com.example.myapplication.usecases.user.update.UpdateUserPasswordUseCase
import com.example.myapplication.usecases.user.update.UpdateUserProfileImageUseCase
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

        bind<CreateGameModeUseCase>() with singleton { CreateGameModeUseCase(instance()) }
        bind<CreateGameUseCase>() with singleton { CreateGameUseCase(instance()) }
        bind<CreateTournamentUseCase>() with singleton { CreateTournamentUseCase(instance()) }
        bind<CreateMatchUseCase>() with singleton { CreateMatchUseCase(instance()) }
        bind<CreateRegistrationUseCase>() with singleton { CreateRegistrationUseCase(instance()) }


        bind<SigninUserUseCase>() with singleton { SigninUserUseCase(instance()) }
        bind<CreateAccountWithEmailAndPasswordUseCase>() with singleton {
            CreateAccountWithEmailAndPasswordUseCase(
                instance()
            )
        }
        bind<CreateAccountWithCompleteInformation>() with singleton {
            CreateAccountWithCompleteInformation(
                instance(),
                instance()
            )
        }
        bind<CreateAccountWithFacebookToken>() with singleton { CreateAccountWithFacebookToken(instance()) }
        bind<CreateAccountWithGoogleToken>() with singleton { CreateAccountWithGoogleToken(instance()) }

        bind<UpdateUserNicknameUseCase>() with singleton { UpdateUserNicknameUseCase(instance()) }
        bind<UpdateUserEmailUseCase>() with singleton { UpdateUserEmailUseCase(instance()) }
        bind<UpdateUserPasswordUseCase>() with singleton { UpdateUserPasswordUseCase(instance()) }
        bind<UpdateUserProfileImageUseCase>() with singleton { UpdateUserProfileImageUseCase(instance()) }

        bind<SearchTournamentsUseCase>() with singleton {
            SearchTournamentsUseCase(instance())
        }
    }
}