package com.example.myapplication.ui.userprofile

import androidx.lifecycle.LifecycleCoroutineScope
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.entities.AuthProviders
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.repositories.ArenaTournamentRepository
import com.example.myapplication.usecases.user.login.LinkEmailPasswordUseCase
import com.example.myapplication.usecases.user.login.LinkFbAccountUseCase
import com.example.myapplication.usecases.user.login.SignInwithFacebookUseCase
import com.example.myapplication.usecases.user.login.SignoutUserUseCase
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.async
import kotlinx.coroutines.launch

class UserProfileViewModel(
    private val signoutUserUseCase: SignoutUserUseCase,
    private val repository: ArenaTournamentRepository,
    private val linkFbAccountUseCase: LinkFbAccountUseCase,
    private val linkEmailPasswordUseCase: LinkEmailPasswordUseCase
) : ViewModel() {

    data class Model(
        val user: UserEntity,
        val isVerified: Boolean,
        val authProvidersLinked: List<AuthProviders>
    )

    val model = MutableLiveData<Model>()

    @ExperimentalCoroutinesApi
    fun loadUserInfo() = viewModelScope.launch {
        val u = async { repository.getCurrentUser()!! }
        val i = async { repository.isCurrentUserEmailVerified() }
        val s = async { repository.getCurrentUserAuthMethods() }
        model.value = Model(u.await(), i.await(), s.await())
    }

    fun signOut(lifecycleScope: LifecycleCoroutineScope, action: suspend () -> Unit) = viewModelScope.launch {
        signoutUserUseCase.buildAction()
        lifecycleScope.launch { action() }
    }

    fun linkFacebookAccount(
        token: String,
        lifecycleScope: LifecycleCoroutineScope,
        action: suspend (Boolean) -> Unit
    ) = viewModelScope.launch {
        val t = linkFbAccountUseCase.buildAction(SignInwithFacebookUseCase.Params(token))
        lifecycleScope.launch { action(t) }
    }

    fun linkEmailPasswordAccount(
        password: String,lifecycleScope: LifecycleCoroutineScope,
        action: suspend (Boolean) -> Unit
    ) = viewModelScope.launch {
        val t = linkEmailPasswordUseCase.buildAction(LinkEmailPasswordUseCase.Params(password))
        lifecycleScope.launch { action(t) }
    }

}