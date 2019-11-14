package com.example.myapplication.ui

import androidx.annotation.IdRes
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.ViewModel
import androidx.navigation.NavController
import androidx.navigation.findNavController
import kotlinx.coroutines.ExperimentalCoroutinesApi
import org.kodein.di.Copy
import org.kodein.di.KodeinAware
import org.kodein.di.android.closestKodein
import org.kodein.di.android.subKodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

abstract class BaseActivity(@IdRes navControllerFragmentId: Int) : AppCompatActivity(), KodeinAware {

    override val kodein by subKodein(closestKodein(), copy = Copy.All) {
        bind<NavController>() with singleton { findNavController(navControllerFragmentId) }
    }

    @ExperimentalCoroutinesApi
    //val authManager by instance<AuthenticationManager>()
    val navController by instance<NavController>()

    inline fun <reified T : ViewModel> viewModelInstance() =
        instance<AppCompatActivity, T>(arg = this)


}