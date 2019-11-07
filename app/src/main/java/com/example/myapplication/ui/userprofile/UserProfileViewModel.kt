package com.example.myapplication.ui.userprofile

import android.view.View
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.usecases.user.GetUserInfoUseCase
import eu.davidea.flexibleadapter.FlexibleAdapter
import eu.davidea.flexibleadapter.items.AbstractFlexibleItem
import eu.davidea.flexibleadapter.items.IFlexible
import eu.davidea.viewholders.FlexibleViewHolder
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.onEach

class UserProfileViewModel(
    private val userInfo: GetUserInfoUseCase
) : ViewModel() {

    private val userProfileViewAdapter = FlexibleAdapter<Model>(emptyList())

    val adapter
        get() = userProfileViewAdapter as RecyclerView.Adapter<*>

    data class Model(
        val userEntity: UserEntity
    ) : AbstractFlexibleItem<Model.ViewHolder>() {

        override fun bindViewHolder(
            adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>,
            holder: ViewHolder,
            position: Int,
            payloads: MutableList<Any>
        ) {
            holder.render(userEntity)
        }

        override fun createViewHolder(
            view: View,
            adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>
        ) = ViewHolder(view, adapter)

        override fun getLayoutRes(): Int {
            TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
        }

        class ViewHolder(val view: View, val adapter: FlexibleAdapter<*>) : FlexibleViewHolder(
            view, adapter
        ) {
            fun render(data: UserEntity) {
                TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
            }

        }
    }

    @ExperimentalCoroutinesApi
    suspend fun getUserInfo() = listOf(userInfo.buildAction()).asFlow()
        .map { Model(it) }
        .onEach {
            userProfileViewAdapter.addItem(it)
        }
        .launchIn(viewModelScope)
}