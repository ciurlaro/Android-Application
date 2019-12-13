package com.example.myapplication.modules

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import org.kodein.di.DKodein
import org.kodein.di.TT
import org.kodein.di.TypeToken
import kotlin.reflect.full.primaryConstructor
import kotlin.reflect.jvm.javaType

@Suppress("UNCHECKED_CAST")
class CustomViewModelFactory(private val injector: DKodein) : ViewModelProvider.Factory {

    override fun <T : ViewModel> create(modelClass: Class<T>) = with(modelClass.kotlin) {
        primaryConstructor?.run {
            parameters.map { TT(it.type.javaType) as TypeToken<Any> }
                .map { injector.Instance(it, null) }
                .toTypedArray()
                .let { call(*it) }
        }
            ?: constructors.firstOrNull { it.parameters.isEmpty() }?.call()
            ?: throw IllegalArgumentException("${modelClass.canonicalName} has not been implemented in this factory")
    }
}
