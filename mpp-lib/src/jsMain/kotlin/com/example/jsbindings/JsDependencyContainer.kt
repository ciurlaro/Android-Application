package com.example.jsbindings

import com.example.myapplication.datasource.TokenFactory
import com.example.myapplication.modules.COMMON_KODEIN
import org.kodein.di.Kodein
import org.kodein.di.direct
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

@JsName("DependencyContainer")
class JsDependencyContainer(tokenFactory: TokenFactory) {

    private val jsKodein by Kodein.lazy {
        extend(COMMON_KODEIN)
        bind<TokenFactory>() with singleton { tokenFactory }
        bind<JsArenaTournamentRepository>() with singleton { JsArenaTournamentRepository(instance()) }
    }

    fun arenaTournamentRepository() =
        jsKodein.direct.instance<JsArenaTournamentRepository>()

}