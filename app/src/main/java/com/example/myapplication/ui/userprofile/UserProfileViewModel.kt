package com.example.myapplication.ui.userprofile

import androidx.lifecycle.LifecycleCoroutineScope
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.usecases.user.info.GetCurrentUserInfoUseCase
import com.example.myapplication.usecases.user.logout.SignoutUserUseCase
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.launch
import org.kodein.di.android.x.AndroidLifecycleScope

class UserProfileViewModel(
    private val getCurrentUserInfoUseCase: GetCurrentUserInfoUseCase,
    private val signoutUserUseCase: SignoutUserUseCase
) : ViewModel() {

    val user = MutableLiveData<UserEntity>()

    @ExperimentalCoroutinesApi
    fun getUserInfo() = viewModelScope.launch {
        getCurrentUserInfoUseCase.buildAction().let {
            user.value = it
        }
    }

    fun signOut(lifecycleScope: LifecycleCoroutineScope, action: suspend () -> Unit) = viewModelScope.launch {
        signoutUserUseCase.buildAction()
        lifecycleScope.launch { action() }
    }

}