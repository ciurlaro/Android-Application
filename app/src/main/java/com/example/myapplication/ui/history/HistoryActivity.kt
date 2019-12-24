package com.example.myapplication.ui.history

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.view.View.GONE
import android.view.View.VISIBLE
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.example.myapplication.R
import com.example.myapplication.ui.BaseActivity
import com.example.myapplication.ui.IntentBuilderWithArguments
import com.example.myapplication.ui.items.TournamentFlexibleItem
import com.example.myapplication.ui.tournament.TournamentDetailActivity
import eu.davidea.flexibleadapter.FlexibleAdapter
import kotlinx.android.synthetic.main.activity_history.*
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.FlowPreview


@ExperimentalCoroutinesApi
@FlowPreview
class HistoryActivity : BaseActivity() {

    private val userId by lazy { intent!!.extras!!.getString(USER_ID)!! }
    private val viewModel: HistoryViewModel by viewModelInstance()
    private val adapter by lazy { FlexibleAdapter<TournamentFlexibleItem>(emptyList()) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_history)
        history_recyclerview.adapter = adapter
        with(viewModel) {
            model.observe { (user, tournaments) ->
                no_content_tv.visibility = if (tournaments.isEmpty()) VISIBLE else GONE
                adapter.addItems(0, tournaments.map { TournamentFlexibleItem(it) })
                adapter.mItemClickListener = FlexibleAdapter.OnItemClickListener { _, position ->
                    startActivity(TournamentDetailActivity, tournaments[position].id)
                    true
                }
                user.image.let {
                    Glide.with(this@HistoryActivity)
                        .load(it)
                        .apply(RequestOptions.circleCropTransform())
                        .fallback(R.drawable.doggo)
                        .into(user_image)
                }
                user_nickname.text = resources.getString(R.string.history_of_user, user.nickname + "\n")
            }
            loadUserInfo(userId)
        }
    }

    companion object : IntentBuilderWithArguments<HistoryActivity, String> {

        private const val USER_ID = "UID"

        override fun buildIntent(context: Context, data: String) =
            Intent(context, HistoryActivity::class.java).apply {
                putExtra(USER_ID, data)
            }

    }

}