package com.example.myapplication.ui.userprofile

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.usecases.user.GetUserInfoUseCase
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.launch

class UserProfileViewModel(
    private val userInfo: GetUserInfoUseCase
) : ViewModel() {

    val user = MutableLiveData<UserEntity>()

    @ExperimentalCoroutinesApi
    fun getUserInfo() = viewModelScope.launch {
        userInfo.buildAction().let {
            user.value = it
        }
    }

}