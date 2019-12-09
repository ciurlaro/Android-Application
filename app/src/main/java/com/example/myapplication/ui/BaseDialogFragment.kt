package com.example.myapplication.ui

import android.content.res.Resources
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.annotation.LayoutRes
import androidx.databinding.DataBindingComponent
import androidx.databinding.DataBindingUtil
import androidx.databinding.ViewDataBinding
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.Fragment
import androidx.lifecycle.LiveData
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModel
import androidx.navigation.NavController
import org.kodein.di.KodeinAware
import org.kodein.di.android.x.closestKodein
import org.kodein.di.erased.instance

abstract class BaseDialogFragment : DialogFragment(),
    KodeinAware {
    @Suppress("PropertyName")
    protected val TAG = this::class.simpleName!!

    override val kodein by closestKodein()

    inline fun <reified T : ViewModel> viewModelInstance() = instance<Fragment, T>(arg = this)

    val navController by instance<NavController>()

    inline fun <reified T : ViewDataBinding> viewDataBinding(
        inflater: LayoutInflater,
        @LayoutRes layoutId: Int,
        container: ViewGroup?,
        attachToParent: Boolean = false,
        bindingComponent: DataBindingComponent? = null
    ) = DataBindingUtil.inflate<T>(
        inflater,
        layoutId,
        container,
        attachToParent,
        bindingComponent
    )!!.apply {
        lifecycleOwner = this@BaseDialogFragment
    }

    fun <T> LiveData<T>.observe(observer: (T) -> Unit) =
        observe(this@BaseDialogFragment, Observer { observer(it) })

    val Int.dp
        get() = (this / Resources.getSystem().displayMetrics.density).toInt()

}