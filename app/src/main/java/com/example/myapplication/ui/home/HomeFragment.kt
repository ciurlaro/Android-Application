package com.example.myapplication.ui.home

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.myapplication.R
import com.example.myapplication.ui.BaseFragment
import kotlinx.android.synthetic.main.fragment_home.*

class HomeFragment : BaseFragment() {

    private val viewModel by viewModelInstance<HomeViewModel>()

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ) = inflater.inflate(R.layout.fragment_home, container, false)!!

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        viewModel.text.observe {
            text_home.text = it.toString()
        }

        viewModel.loadMatches()

    }
}