package com.example.myapplication.modules

import com.example.myapplication.mappers.*
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

object MappersModule : KodeinModuleProvider {

    override fun provideModule(): Kodein.Builder.() -> Unit = {
        bind<AccountStatusMapper>() with singleton { AccountStatusMapper() }
        bind<AccountSubscriptionMapper>() with singleton { AccountSubscriptionMapper() }
        bind<DateTimeMapper>() with singleton { DateTimeMapper() }
        bind<GameMapper>() with singleton { GameMapper() }
        bind<MatchMapper>() with singleton { MatchMapper(instance(), instance()) }
        bind<RegistrationMapper>() with singleton { RegistrationMapper(instance(), instance()) }
        bind<TournamentMapper>() with singleton { TournamentMapper(instance(), instance()) }
        bind<UserMapper>() with singleton { UserMapper() }
        bind<ModeMapper>() with singleton { ModeMapper() }
    }

}