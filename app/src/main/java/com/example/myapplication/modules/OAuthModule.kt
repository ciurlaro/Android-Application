package com.example.myapplication.modules

import android.content.res.Resources
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.example.myapplication.R
import com.example.myapplication.ui.utils.FacebookCallbackManager
import com.example.myapplication.ui.utils.FacebookLoginManager
import com.facebook.CallbackManager
import com.facebook.login.LoginManager
import com.google.android.gms.auth.api.signin.GoogleSignIn
import com.google.android.gms.auth.api.signin.GoogleSignInClient
import com.google.android.gms.auth.api.signin.GoogleSignInOptions
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.factory
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object OAuthModule : KodeinModuleProvider {
    override fun provideModule(): Kodein.Builder.() -> Unit = {

        bind<FacebookCallbackManager>() with singleton { CallbackManager.Factory.create() }
        bind<FacebookLoginManager>() with singleton { LoginManager.getInstance() }

        bind<GoogleSignInOptions>() with singleton {
            GoogleSignInOptions.Builder(GoogleSignInOptions.DEFAULT_SIGN_IN)
                .requestEmail()
                .requestIdToken(instance<Resources>().getString(R.string.google_server_client_id))
                .requestProfile()
                .build()
        }
        bind<GoogleSignInClient>() with factory { activity: AppCompatActivity ->
            GoogleSignIn.getClient(activity, instance())
        }
        bind<GoogleSignInClient>() with factory { fragment: Fragment ->
            GoogleSignIn.getClient(fragment.requireContext(), instance())
        }
    }
}