package com.example.myapplication.ui.history

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.launch

class HistoryViewModel(
    private val getUserInfoByUidUseCase: GetUserInfoByUidUseCase
) : ViewModel() {

    @ExperimentalCoroutinesApi
    fun loadUserInfo() {
        viewModelScope.launch {
            getUserInfoByUidUseCase.buildAction().let {

            }
        }

    }

}