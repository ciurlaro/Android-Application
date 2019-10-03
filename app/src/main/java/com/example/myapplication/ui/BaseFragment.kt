package com.example.myapplication.ui

import androidx.fragment.app.Fragment
import androidx.lifecycle.LiveData
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModel
import org.kodein.di.KodeinAware
import org.kodein.di.android.x.closestKodein
import org.kodein.di.generic.instance

abstract class BaseFragment : Fragment(), KodeinAware {

    override val kodein by closestKodein()

    inline fun <reified T : ViewModel> viewModelInstance() = instance<Fragment, T>(arg = this)

    fun <T> LiveData<T>.observe(observer: (T) -> Unit) =
        observe(this@BaseFragment, Observer { observer(it) })

}