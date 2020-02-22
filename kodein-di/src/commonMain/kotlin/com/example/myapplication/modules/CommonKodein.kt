package com.example.myapplication.modules

import io.ktor.client.features.logging.LogLevel
import io.ktor.util.InternalAPI
import kotlinx.coroutines.FlowPreview
import kotlinx.serialization.UnstableDefault
import org.kodein.di.Kodein
import org.kodein.di.erased.with

//@OptIn(UnstableDefault::class)
@InternalAPI
@FlowPreview
fun buildCommonKodein(
    serverProtocol: String,
    serverUrl: String,
    serverPort: Int,
    isMock: Boolean = false,
    isDebug: Boolean = false,
    networkLogLevel: LogLevel = LogLevel.ALL
) = Kodein.Module("COMMON_KODEIN") {
    import(MappersModule)
    import(SplittersModule)
    import(RepositoriesModule)
    import(DatasourceModule)
    import(NetworkModule)
    import(UseCasesModule)
    constant("serverProtocol") with serverProtocol
    constant("serverUrl") with serverUrl
    constant("serverPort") with serverPort
    constant("isDebug") with isDebug
    if (isDebug)
        constant("networkLogLevel") with networkLogLevel
    if (isMock)
        import(MockModule, allowOverride = true)

}
