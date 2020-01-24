@file:JsExport

package com.example.myapplication.angular

import InjectionToken
import Injector
import ReflectiveInjector
import `T$8`
import com.example.myapplication.datasource.ArenaTournamentDatasource
import com.example.myapplication.datasource.ArenaTournamentDatasourceImplementation
import com.example.myapplication.datasource.EndpointsImplementation

object DITokens {

    val injector by lazy {
        Injector.create()
    }

    val endpointsToken by lazy {
        InjectionToken<ArenaTournamentDatasource.Endpoints>(
            "ArenaTournamentEndpoints",
            object : `T$8`<ArenaTournamentDatasource.Endpoints> {
                override var providedIn: dynamic = "root"
                override var factory: () -> ArenaTournamentDatasource.Endpoints = {
                    EndpointsImplementation("http", "localhost", 8080)
                }
            }
        )
    }

    val arenaTournamentDatasourceToken by lazy {
        InjectionToken<ArenaTournamentDatasource>(
            "ArenaTournamentEndpoints",
            object : `T$8`<ArenaTournamentDatasource> {
                override var providedIn: dynamic = "root"
                override var factory: () -> ArenaTournamentDatasource = {
                    ArenaTournamentDatasourceImplementation()
                }
            }
        )
    }

    fun lol() {
        ReflectiveInjector.
    }
}