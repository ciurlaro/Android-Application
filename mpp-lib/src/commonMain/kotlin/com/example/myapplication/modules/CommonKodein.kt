package com.example.myapplication.modules

import io.ktor.client.features.logging.LogLevel
import org.kodein.di.Kodein
import org.kodein.di.erased.with

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
    import(DatasourcesModule)
    import(NetworkModule)
    import(UseCasesModule)
    import(AuthModule)
    constant("serverProtocol") with serverProtocol
    constant("serverUrl") with serverUrl
    constant("serverPort") with serverPort
    constant("isDebug") with isDebug
    if (isDebug)
        constant("networkLogLevel") with networkLogLevel
    if (isMock) {
        import(CommonMockModule, allowOverride = true)
        import(PlatformSpecificMockModule)
    }
}