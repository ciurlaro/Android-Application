package com.example.myapplication

import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.ViewModel
import org.kodein.di.KodeinAware
import org.kodein.di.android.closestKodein
import org.kodein.di.generic.instance

abstract class BaseActivity : AppCompatActivity(), KodeinAware {

    override val kodein by closestKodein()

    inline fun <reified T : ViewModel> viewModelInstance() =
        instance<AppCompatActivity, T>(arg = this)

}