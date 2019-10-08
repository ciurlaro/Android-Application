package com.example.jsbindings

import com.example.myapplication.datasource.TokenFactory
import com.example.myapplication.modules.buildCommonKodein
import org.kodein.di.Kodein
import org.kodein.di.KodeinAware
import org.kodein.di.direct
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

@JsName("DependencyContainer")
class JsDependencyContainer(
    tokenFactory: TokenFactory,
    serverProtocol: String,
    serverUrl: String,
    serverPort: Int
) : KodeinAware {

    override val kodein by Kodein.lazy {
        extend(buildCommonKodein(serverProtocol, serverUrl, serverPort))
        bind<TokenFactory>() with singleton { tokenFactory }
        bind<JsArenaTournamentRepository>() with singleton { JsArenaTournamentRepository(instance()) }
    }

    fun arenaTournamentRepository() =
        direct.instance<JsArenaTournamentRepository>()

}