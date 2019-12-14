package com.example.myapplication.ui.userprofile

import androidx.lifecycle.LifecycleCoroutineScope
import android.app.Dialog
import android.content.Context
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.R
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.registration.GetRegistrationsByUserUseCase
import com.example.myapplication.usecases.user.info.GetCurrentUserInfoUseCase
import com.example.myapplication.usecases.user.logout.SignoutUserUseCase
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.launch
import org.kodein.di.android.x.AndroidLifecycleScope

class UserProfileViewModel(
    private val getCurrentUserInfoUseCase: GetCurrentUserInfoUseCase,
    private val signoutUserUseCase: SignoutUserUseCase
    private val getCurrentUserInfoUseCase: GetCurrentUserInfoUseCase,
    private val getTournamentsByUserUseCase: GetRegistrationsByUserUseCase,
    private val repository: ArenaTournamentRepository,
    private val signoutUseCase: SignoutUserUseCase

) : ViewModel() {

    val user = MutableLiveData<UserEntity>()
    val isUserVerified = MutableLiveData<Boolean>()
    private val modifiedEmail = MutableLiveData<String>()
    private val modifiedNickname = MutableLiveData<String>()

    @ExperimentalCoroutinesApi
    fun loadUserInfo() {
        viewModelScope.launch {
            getCurrentUserInfoUseCase.buildAction().let {
                user.value = it
                modifiedEmail.value = it.email
                modifiedNickname.value = it.nickname
            }
        }
        viewModelScope.launch {
            isUserVerified.value = repository.isCurrentUserEmailVerified()
        }
    }

    fun getHistory(requireContext: Context) {
        viewModelScope.launch {
            getTournamentsByUserUseCase.buildAction(user.value!!)
        }
        val dialog = Dialog(requireContext)
        dialog.setContentView(R.layout.fragment_home)
        dialog.show()

    }

    fun signOut(lifecycleScope: LifecycleCoroutineScope, action: suspend () -> Unit) = viewModelScope.launch {
        signoutUserUseCase.buildAction()
        lifecycleScope.launch { action() }
    }

}