package com.example.myapplication.ui.userprofile

import androidx.lifecycle.LifecycleCoroutineScope
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.entities.AuthProviders
import com.example.myapplication.entities.UserEntity
import com.example.myapplication.usecases.user.info.GetCurrentUserAuthMethodsUseCase
import com.example.myapplication.usecases.user.info.GetCurrentUserInfoUseCase
import com.example.myapplication.usecases.user.info.IsCurrentUserVerifiedUseCase
import com.example.myapplication.usecases.user.login.*
import com.example.myapplication.usecases.user.update.UpdateUserProfileImageUseCase
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.async
import kotlinx.coroutines.launch
import java.io.File

@ExperimentalCoroutinesApi
class UserProfileViewModel(
    private val signoutUserUseCase: SignoutUserUseCase,
    private val getCurrentUserInfoUseCase: GetCurrentUserInfoUseCase,
    private val isCurrentUserVerifiedUseCase: IsCurrentUserVerifiedUseCase,
    private val getCurrentUserAuthMethods: GetCurrentUserAuthMethodsUseCase,
    private val updateUserProfileImageUseCase: UpdateUserProfileImageUseCase,
    private val linkFbAccountUseCase: LinkFbAccountUseCase,
    private val linkGoogleAccountUseCase: LinkGoogleAccountUseCase,
    private val linkEmailPasswordUseCase: LinkEmailPasswordUseCase
) : ViewModel() {

    data class Model(
        val user: UserEntity,
        val isVerified: Boolean,
        val authProvidersLinked: List<AuthProviders>
    )

    val model = MutableLiveData<Model>()
    val createPassword = MutableLiveData<String>("")
    val repeatCreatePassword = MutableLiveData<String>("")


    fun loadUserInfo() = viewModelScope.launch {
        val currentUser = async { getCurrentUserInfoUseCase.buildAction() }
        val isMailVerified = async { isCurrentUserVerifiedUseCase.buildAction() }
        val authMethods = async { getCurrentUserAuthMethods.buildAction() }
        model.value = Model(currentUser.await()!!, isMailVerified.await(), authMethods.await())
    }

    fun updateProfileImage(data: File) = viewModelScope.launch {
        updateUserProfileImageUseCase.buildAction(data.readBytes())
        loadUserInfo()
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
        val t = linkFbAccountUseCase.buildAction(SignInWithFacebookUseCase.Params(token))
        lifecycleScope.launch { action(t) }
    }

    fun linkGoogleAccount(
        token: String,
        lifecycleScope: LifecycleCoroutineScope,
        action: suspend (Boolean) -> Unit
    ) = viewModelScope.launch {
        val t = linkGoogleAccountUseCase.buildAction(token)
        lifecycleScope.launch { action(t) }
    }

    fun linkEmailPasswordAccount(
        lifecycleScope: LifecycleCoroutineScope,
        action: suspend (Boolean) -> Unit
    ) = viewModelScope.launch {
        val t = linkEmailPasswordUseCase.buildAction(LinkEmailPasswordUseCase.Params(createPassword.value!!))
        lifecycleScope.launch { action(t) }
    }

}
