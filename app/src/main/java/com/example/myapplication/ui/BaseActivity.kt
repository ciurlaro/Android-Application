package com.example.myapplication.ui

import androidx.annotation.LayoutRes
import androidx.appcompat.app.AppCompatActivity
import androidx.databinding.DataBindingUtil
import androidx.databinding.ViewDataBinding
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

    fun <T : ViewDataBinding> bindContentView(@LayoutRes resId: Int, function: T.() -> Unit) =
        DataBindingUtil.setContentView<T>(this, resId)!!.apply(function)

}