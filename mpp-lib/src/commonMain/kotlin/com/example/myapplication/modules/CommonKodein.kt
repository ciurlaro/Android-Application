package com.example.myapplication.modules

import org.kodein.di.Kodein
import org.kodein.di.erased.with
import com.example.myapplication.modules.import

fun buildCommonKodein(serverProtocol: String, serverUrl: String, serverPort: Int) = Kodein.Module("COMMON_KODEIN") {
    import(MappersModule)
    import(SplittersModule)
    import(RepositoriesModule)
    import(DatasourcesModule)
    import(NetworkModule)
    import(UseCasesModule)
    constant("serverProtocol") with serverProtocol
    constant("serverUrl") with serverUrl
    constant("serverPort") with serverPort
}