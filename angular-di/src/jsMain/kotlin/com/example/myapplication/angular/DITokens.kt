@file:JsExport

package com.example.myapplication.angular

import com.example.myapplication.datasource.*
import com.github.lamba92.firebasemultiplatform.auth.FirebaseAuth
import externals.angular.FactoryProvider
import externals.angular.InjectionToken
import externals.angular.Injector
import externals.angular.ValueProvider
import io.ktor.client.HttpClient
import io.ktor.client.features.json.JsonFeature
import io.ktor.client.features.json.serializer.KotlinxSerializer
import io.ktor.util.InternalAPI
import kotlinx.serialization.UnstableDefault

@InternalAPI
@UnstableDefault
object DITokens {

    val endpointsToken = InjectionToken<ArenaTournamentDatasource.Endpoints>("ArenaTournamentEndpoints")
    val atDSToken = InjectionToken<ArenaTournamentDatasource>("atDSToken")
    val fbAuthDatasourceToken = InjectionToken<FirebaseAuthDatasource>("fbAuthDatasourceToken")
    val hostToken = InjectionToken<String>("hostToken")
    val protocolToken = InjectionToken<String>("protocolToken")
    val portToken = InjectionToken<Int>("portToken")
    val httpClientToken = InjectionToken<HttpClient>("httpClientToken")

    fun injector(protocol: String, host: String, port: Int): Injector {

        return Injector.create(
            arrayOf(
                object : ValueProvider<String> {
                    override var provide = hostToken
                    override var useValue = host
                },
                object : ValueProvider<String> {
                    override var provide = protocolToken
                    override var useValue = protocol
                },
                object : ValueProvider<Int> {
                    override var provide = portToken
                    override var useValue = port
                },
                object : FactoryProvider<ArenaTournamentDatasource.Endpoints> {
                    override var provide = endpointsToken
                    override var useFactory: (String, String, Int) -> ArenaTournamentDatasource.Endpoints =
                        { protocol: String, host: String, port: Int -> EndpointsImplementation(protocol, host, port) }
                    override var deps: Array<InjectionToken<*>>? = arrayOf(protocolToken, hostToken, portToken)
                },
                object : ValueProvider<HttpClient> {
                    override var provide = httpClientToken
                    override var useValue = HttpClient { install(JsonFeature) { serializer = KotlinxSerializer() } }

                },
                object : ValueProvider<FirebaseAuthDatasource> {
                    override var provide = fbAuthDatasourceToken
                    override var useValue: FirebaseAuthDatasource =
                        FirebaseAuthDatasourceImplementation(FirebaseAuth.default)
                },
                object : FactoryProvider<ArenaTournamentDatasource> {
                    override var provide = atDSToken
                    override var useFactory: (HttpClient, ArenaTournamentDatasource.Endpoints, FirebaseAuthDatasource) -> ArenaTournamentDatasource =
                        { httpClient, endpoints, fbAuthDatasource ->
                            ArenaTournamentDatasourceImplementation(httpClient, endpoints, fbAuthDatasource)
                        }
                    override var deps: Array<InjectionToken<*>>? =
                        arrayOf(httpClientToken, endpointsToken, fbAuthDatasourceToken)
                }
            )
        )
    }

}