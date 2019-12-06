package com.example.myapplication.ui.match

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.myapplication.R
import com.example.myapplication.ui.BaseFragment
import kotlinx.coroutines.ExperimentalCoroutinesApi

@ExperimentalCoroutinesApi
class MatchFragment : BaseFragment() {

    private val viewModel: MatchViewModel by viewModelInstance()
    //private val signoutUseCase by instance<SignoutUserUseCase>()

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ) = inflater.inflate(R.layout.activity_match, container, false)!!

    @ExperimentalCoroutinesApi
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        //viewModel.getMatchesByTournament()

//
//        viewModel.user.observe {
//            Glide.with(context!!)
//                .load(it.image)
//                .into(user_image)
//            user_nickname.text = it.nickname
//        }
//
//        button_logout.setOnClickListener {
//            lifecycleScope.launch() {
//                logOut()
//            }
//        }
    }
}