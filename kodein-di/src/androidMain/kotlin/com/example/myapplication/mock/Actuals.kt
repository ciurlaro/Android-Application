package com.example.myapplication.mock

import android.content.res.Resources
import androidx.annotation.RawRes
import com.example.myapplication.kodeindi.R
import org.kodein.di.Kodein
import org.kodein.di.bindings.NoArgSimpleBindingKodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

val MockJson.correspondingResource
    get() = when (this) {
        MockJson.SINGLE_GAME_RESPONSE -> R.raw.game_response
        MockJson.MULTIPLE_GAME_RESPONSE -> R.raw.multiple_games_response
        MockJson.SINGLE_GAME_MODE_RESPONSE -> R.raw.game_mode_response
        MockJson.MULTIPLE_GAME_MODES_RESPONSE -> R.raw.multiple_game_modes_response
        MockJson.SINGLE_TOURNAMENT_RESPONSE -> R.raw.tournament_response
        MockJson.MULTIPLE_TOURNAMENTS_RESPONSE -> R.raw.multiple_tournaments_response
        MockJson.SINGLE_REGISTRATION_RESPONSE -> R.raw.registration_response
        MockJson.MULTIPLE_REGISTRATIONS_RESPONSE -> R.raw.multiple_registrations_response
    }

actual fun Kodein.Builder.bindMock(mockJson: MockJson) =
    bind<String>(mockJson) with singleton { rawFromRes(mockJson.correspondingResource) }

private fun NoArgSimpleBindingKodein<Any?>.rawFromRes(@RawRes id: Int) =
    instance<Resources>().openRawResource(id).bufferedReader().readText()