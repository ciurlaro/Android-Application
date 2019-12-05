package com.example.myapplication.modules

import android.content.res.Resources
import androidx.annotation.RawRes
import com.example.myapplication.R
import org.kodein.di.Kodein
import org.kodein.di.bindings.NoArgSimpleBindingKodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

actual object PlatformSpecificMockModule : KodeinModuleProvider {

    override fun provideModule(): Kodein.Builder.() -> Unit = {

        bind<String>("single_game_response") with singleton { rawFromRes(R.raw.game_response) }
        bind<String>("multiple_game_response") with singleton { rawFromRes(R.raw.multiple_games_response) }

        bind<String>("single_game_mode_response") with singleton { rawFromRes(R.raw.game_mode_response) }
        bind<String>("multiple_game_modes_response") with singleton { rawFromRes(R.raw.multiple_game_modes_response) }

        bind<String>("single_tournament_response") with singleton { rawFromRes(R.raw.tournament_response) }
        bind<String>("multiple_tournament_response") with singleton { rawFromRes(R.raw.multiple_tournaments_response) }

        bind<String>("single_match_response") with singleton { rawFromRes(R.raw.match_response) }
        bind<String>("multiple_match_response") with singleton { rawFromRes(R.raw.multiple_matches_response) }

        bind<String>("single_registration_response") with singleton { rawFromRes(R.raw.registration_response) }
        bind<String>("multiple_registration_response") with singleton { rawFromRes(R.raw.multiple_registrations_response) }

        bind<String>("single_user_response") with singleton { rawFromRes(R.raw.user_response) }
        bind<String>("multiple_user_response") with singleton { rawFromRes(R.raw.multiple_users_response) }

    }

    private fun NoArgSimpleBindingKodein<Any?>.rawFromRes(@RawRes id: Int) =
        instance<Resources>().openRawResource(id).bufferedReader().readText()

}