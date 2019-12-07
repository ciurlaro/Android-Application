package com.example.myapplication.ui

import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.LiveData
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModel
import org.kodein.di.KodeinAware
import org.kodein.di.android.closestKodein
import org.kodein.di.erased.instance

abstract class BaseActivity : AppCompatActivity(), KodeinAware {

    override val kodein by closestKodein()

    inline fun <reified T : ViewModel> viewModelInstance() =
        instance<AppCompatActivity, T>(arg = this)

    fun <T> LiveData<T>.observe(observer: (T) -> Unit) =
        observe(this@BaseActivity, Observer { observer(it) })

}