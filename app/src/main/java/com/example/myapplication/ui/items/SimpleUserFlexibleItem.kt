package com.example.myapplication.ui.items

import android.view.View
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.example.myapplication.R
import com.example.myapplication.entities.UserEntity
import eu.davidea.flexibleadapter.FlexibleAdapter
import eu.davidea.flexibleadapter.items.AbstractFlexibleItem
import eu.davidea.flexibleadapter.items.IFlexible
import kotlinx.android.synthetic.main.simple_item_user.view.*

data class SimpleUserFlexibleItem(val user: UserEntity, val onClick: (UserEntity) -> Unit) :
    AbstractFlexibleItem<SimpleUserFlexibleItem.VH>() {

    override fun bindViewHolder(
        adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>,
        holder: VH,
        position: Int,
        payloads: MutableList<Any>?
    ) = holder.render(user)

    override fun createViewHolder(
        view: View,
        adapter: FlexibleAdapter<IFlexible<RecyclerView.ViewHolder>>?
    ) = VH(view, onClick)

    override fun getLayoutRes() =
        R.layout.simple_item_user

    class VH(view: View, val onClick: (UserEntity) -> Unit) : RecyclerView.ViewHolder(view) {
        fun render(data: UserEntity) = with(itemView) {
            data.image?.let {
                Glide.with(context)
                    .load(it)
                    .into(user_image)
            }
            user_nickname.text = data.nickname
            setOnClickListener { onClick(data) }
        }
    }
}