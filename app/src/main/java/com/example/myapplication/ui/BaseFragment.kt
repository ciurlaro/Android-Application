package com.example.myapplication.ui

import android.os.Bundle
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.activity.addCallback
import androidx.annotation.LayoutRes
import androidx.databinding.DataBindingComponent
import androidx.databinding.DataBindingUtil
import androidx.databinding.ViewDataBinding
import androidx.fragment.app.Fragment
import androidx.lifecycle.LiveData
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModel
import androidx.navigation.NavController
import com.example.myapplication.AuthenticationManager
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.GlobalScope
import org.kodein.di.KodeinAware
import org.kodein.di.android.x.closestKodein
import org.kodein.di.erased.instance

@ExperimentalCoroutinesApi
abstract class BaseFragment : Fragment(), KodeinAware {

    override val kodein by closestKodein()

    inline fun <reified T : ViewModel> viewModelInstance() = instance<Fragment, T>(arg = this)

    protected val authManager by instance<AuthenticationManager>()
    protected val navController by instance<NavController>()

    inline fun <reified T : ViewDataBinding> viewDataBinding(
        inflater: LayoutInflater,
        @LayoutRes layoutId: Int,
        container: ViewGroup?,
        attachToParent: Boolean = false,
        bindingComponent: DataBindingComponent? = null
    ) = DataBindingUtil.inflate<T>(inflater, layoutId, container, attachToParent, bindingComponent)!!.apply {
            lifecycleOwner = this@BaseFragment
        }

    fun <T> LiveData<T>.observe(observer: (T) -> Unit) =
        observe(this@BaseFragment, Observer { observer(it) })

    fun AuthenticationManager.setOnLoginCallback(
        dispatcher: CoroutineScope = GlobalScope,
        action: suspend () -> Unit
    ) = addOnLoginCallback(
        this@BaseFragment,
        AuthenticationManager.Action(this@BaseFragment::class.qualifiedName!!, dispatcher, action)
    )

    fun AuthenticationManager.setOnLogoutCallback(
        dispatcher: CoroutineScope = GlobalScope,
        action: suspend () -> Unit
    ) = addOnLogoutCallback(
        this@BaseFragment,
        AuthenticationManager.Action(this@BaseFragment::class.qualifiedName!!, dispatcher, action)
    )


}