package com.example.myapplication.modules

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.example.myapplication.ui.home.HomeViewModel
import com.example.myapplication.ui.search.SearchViewModel
import com.example.myapplication.ui.userprofle.UserProfileViewModel
import org.kodein.di.DKodein
import org.kodein.di.erased.instance

@Suppress("UNCHECKED_CAST")
class CustomViewModelFactory(private val injector: DKodein) : ViewModelProvider.Factory {

    override fun <T : ViewModel> create(modelClass: Class<T>): T = when (modelClass.kotlin) {
        HomeViewModel::class -> HomeViewModel(
            injector.instance(), injector.instance(), injector.instance(), injector.instance(),
            injector.instance(), injector.instance(), injector.instance(), injector.instance(),
            injector.instance(), injector.instance(), injector.instance(), injector.instance(),
            injector.instance(), injector.instance(), injector.instance(), injector.instance(),
            injector.instance(), injector.instance(), injector.instance(), injector.instance(),
            injector.instance(), injector.instance()
        )
        SearchViewModel::class -> SearchViewModel(injector.instance())
        UserProfileViewModel::class -> UserProfileViewModel(injector.instance())
        else -> if (modelClass.kotlin.constructors.any { it.parameters.isEmpty() })
            modelClass.kotlin.constructors.first { it.parameters.isEmpty() }.call()
        else throw IllegalArgumentException("${modelClass.canonicalName} has not been implemented in this factory")
    } as T
}