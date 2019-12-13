package com.example.myapplication.ui

import android.content.res.Resources
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.DialogFragment
import androidx.fragment.app.Fragment
import androidx.lifecycle.LiveData
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModel
import org.kodein.di.KodeinAware
import org.kodein.di.android.x.closestKodein
import org.kodein.di.erased.instance

abstract class BaseDialogFragment : DialogFragment(), KodeinAware {
    @Suppress("PropertyName")
    protected val TAG = this::class.simpleName!!

    override val kodein by closestKodein()

    inline fun <reified T : ViewModel> viewModelInstance() = instance<Fragment, T>(arg = this)

    fun <T> LiveData<T>.observe(observer: (T) -> Unit) =
        observe(this@BaseDialogFragment, Observer { observer(it) })

    val Int.dp
        get() = (this / Resources.getSystem().displayMetrics.density).toInt()

    fun <T: AppCompatActivity> startActivity(intentBuilder: IntentBuilder<T>) =
        requireActivity().startActivity(intentBuilder.buildIntent(requireContext()))

    fun <T: AppCompatActivity, P> startActivity(intentBuilder: IntentBuilderWithArguments<T, P>, arguments: P) =
        requireActivity().startActivity(intentBuilder.buildIntent(requireContext(), arguments))

}