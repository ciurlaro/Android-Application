package com.example.myapplication.ui

import androidx.annotation.IdRes
import androidx.navigation.NavController
import androidx.navigation.findNavController
import kotlinx.coroutines.ExperimentalCoroutinesApi
import org.kodein.di.Copy
import org.kodein.di.android.closestKodein
import org.kodein.di.android.subKodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

abstract class BaseFragmentedActivity(@IdRes navControllerFragmentId: Int) : BaseActivity() {

    override val kodein by subKodein(closestKodein(), copy = Copy.All) {
        bind<NavController>() with singleton { findNavController(navControllerFragmentId) }
    }

    @ExperimentalCoroutinesApi
    val navController by instance<NavController>()

}