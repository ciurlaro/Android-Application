package com.example.myapplication.modules

import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelProviders
import com.example.myapplication.ui.history.HistoryViewModel
import com.example.myapplication.ui.home.HomeViewModel
import com.example.myapplication.ui.login.SigninViewModel
import com.example.myapplication.ui.match.MatchViewModel
import com.example.myapplication.ui.search.SearchViewModel
import com.example.myapplication.ui.signup.SignupViewModel
import com.example.myapplication.ui.tournament.CreateTournamentViewModel
import com.example.myapplication.ui.tournament.SelectGameDialogViewModel
import com.example.myapplication.ui.tournament.TournamentDetailViewModel
import com.example.myapplication.ui.userprofile.UserProfileViewModel
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.factory
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

@FlowPreview
@ExperimentalCoroutinesApi
object ViewModelModule : KodeinModuleProvider {

    override fun provideModule(): Kodein.Builder.() -> Unit = {

        bind<ViewModelProvider.Factory>() with singleton { CustomViewModelFactory(dkodein) }

        bindViewModel<HomeViewModel>()
        bindViewModel<SearchViewModel>()
        bindViewModel<UserProfileViewModel>()
        bindViewModel<SigninViewModel>()
        bindViewModel<SignupViewModel>()
        bindViewModel<MatchViewModel>()
        bindViewModel<SelectGameDialogViewModel>()
        bindViewModel<CreateTournamentViewModel>()
        bindViewModel<TournamentDetailViewModel>()
        bindViewModel<HistoryViewModel>()

    }

    private inline fun <reified T : ViewModel> Kodein.Builder.bindViewModel() {

        bind<T>() with factory { activity: AppCompatActivity ->
            ViewModelProviders.of(activity, instance()).get(T::class.java)
        }

        bind<T>() with factory { fragment: Fragment ->
            ViewModelProviders.of(fragment, instance()).get(T::class.java)
        }

    }

}