package com.example.myapplication.ui.option

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.myapplication.ui.BaseFragment
import kotlinx.coroutines.ExperimentalCoroutinesApi
import com.example.myapplication.R

@ExperimentalCoroutinesApi
class OptionFragment : BaseFragment() {
    private val viewModel: OptionViewModel by viewModelInstance()

    @ExperimentalCoroutinesApi
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ) = inflater.inflate(R.layout.fragment_option, container, false)!!

    @ExperimentalCoroutinesApi
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
    }
}