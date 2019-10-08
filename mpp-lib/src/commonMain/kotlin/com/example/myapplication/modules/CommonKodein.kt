package com.example.myapplication.modules

import org.kodein.di.Kodein
import org.kodein.di.erased.with

fun buildCommonKodein(serverProtocol: String, serverUrl: String, serverPort: Int) = Kodein.lazy {
    import(MappersModule)
    import(SpittersModule)
    import(RepositoriesModule)
    import(DatasourcesModule)
    import(NetworkModule)
    import(UseCasesModule)
    constant("serverProtocol") with serverProtocol
    constant("serverUrl") with serverUrl
    constant("serverPort") with serverPort
}