@file:JsExport

package com.example.myapplication.jscontainer

import com.example.myapplication.modules.buildCommonKodein
import com.example.myapplication.usecases.user.login.SigninWithEmailUseCase
import io.ktor.client.features.logging.LogLevel
import io.ktor.util.InternalAPI
import kotlinx.coroutines.FlowPreview
import org.kodein.di.Kodein
import org.kodein.di.KodeinAware
import org.kodein.di.direct
import org.kodein.di.erased.instance

@JsName("JsDependencyContainer")
class JsDependencyContainer(
    serverProtocol: String,
    serverUrl: String,
    serverPort: Int,
    isMock: Boolean = false,
    isDebug: Boolean = false,
    networkLogLevel: String = "all"
) : KodeinAware {

    @FlowPreview
    @InternalAPI
    override val kodein by Kodein.lazy {
        import(
            buildCommonKodein(
                serverProtocol, serverUrl, serverPort, isMock, isDebug, when (networkLogLevel.toLowerCase()) {
                    "headers" -> LogLevel.HEADERS
                    "body" -> LogLevel.BODY
                    "info" -> LogLevel.INFO
                    "none" -> LogLevel.NONE
                    else -> LogLevel.ALL
                }
            )
        )
    }

    @JsName("signInWithEmailUseCase")
    fun signInWithEmailUseCase(params: SigninWithEmailUseCase.Params) =
        direct.instance<SigninWithEmailUseCase>().asPromise(params)

}