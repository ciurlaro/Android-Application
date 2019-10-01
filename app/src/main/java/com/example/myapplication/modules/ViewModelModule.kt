package com.example.myapplication.modules

import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.ViewModelProviders
import com.example.myapplication.ui.home.HomeViewModel
import com.example.myapplication.ui.search.SearchViewModel
import com.example.myapplication.ui.userprofle.UserProfileViewModel
import org.kodein.di.Kodein
import org.kodein.di.generic.bind
import org.kodein.di.generic.factory
import org.kodein.di.generic.instance
import org.kodein.di.generic.singleton

object ViewModelModule : KodeinModuleProvider {

    override fun provideModule(): Kodein.Builder.() -> Unit = {

        bind<ViewModelProvider.Factory>() with singleton { CustomViewModelFactory(dkodein) }

        bindViewModel<HomeViewModel>()
        bindViewModel<SearchViewModel>()
        bindViewModel<UserProfileViewModel>()

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