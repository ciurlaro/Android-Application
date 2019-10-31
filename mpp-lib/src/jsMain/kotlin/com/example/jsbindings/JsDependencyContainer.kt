package com.example.jsbindings

import com.example.myapplication.datasource.TokenFactory
import com.example.myapplication.modules.JsUseCasesModule
import com.example.myapplication.modules.buildCommonKodein
import com.example.myapplication.modules.import
import com.example.myapplication.usecases.mode.JsCreateGameModeUseCase
import com.example.myapplication.usecases.tournament.JsGetByModeUseCase
import com.example.myapplication.usecases.user.JsGetAccountVerificationStatusUseCase
import org.kodein.di.Kodein
import org.kodein.di.KodeinAware
import org.kodein.di.erased.bind
import org.kodein.di.erased.instance
import org.kodein.di.erased.singleton

@JsName("DependencyContainer")
class JsDependencyContainer(
    serverProtocol: String,
    serverUrl: String,
    serverPort: Int,
    factory: () -> String?
) : KodeinAware {

    override val kodein by Kodein.lazy {
        import(buildCommonKodein(serverProtocol, serverUrl, serverPort))
        import(JsUseCasesModule)
        bind<TokenFactory>() with singleton {
            object : TokenFactory {
                override val factory = factory
            }
        }
    }

    @JsName("getByModeUseCase")
    val getByModeUseCase by instance<JsGetByModeUseCase>()

    @JsName("getJsCreateGameModeUseCase")
    val getJsCreateGameModeUseCase by instance<JsCreateGameModeUseCase>()

    @JsName("getAccountVerificationStatusUseCase")
    val getAccountVerificationStatusUseCase by instance<JsGetAccountVerificationStatusUseCase>()

}

// const container = new com.example.jsbindings.JsDependencyContainer("", "", "", {
//   w;lekfmelwrigw
// })
//  container.jsGetByModeUseCase.buildAction({ mode: "freeforall", page: 1 }) observable