package com.example.myapplication

import com.example.myapplication.modules.buildCommonKodein
import com.example.myapplication.usecases.user.login.SigninWithEmailUseCase
import io.ktor.client.features.logging.LogLevel
import io.ktor.util.InternalAPI
import kotlinx.coroutines.FlowPreview
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.io.reader
import kotlinx.html.InputType
import org.kodein.di.Kodein
import org.kodein.di.erased.instance
import org.w3c.dom.get
import org.w3c.files.FileReader
import kotlin.browser.document
import kotlin.browser.window


//suspend fun main() {
//
//    with(document) {
//
//        println(open("home.html").toString())
//
//        getElementById("ng-view")?.apply {
//            innerHTML = open("home.html").toString()
//        }
//
//    }
//}









@FlowPreview
@InternalAPI
val container by Kodein.lazy {
    import(buildCommonKodein("http", "mock", 12, true, true, LogLevel.ALL))
}

@FlowPreview
@InternalAPI
suspend fun main() {
//    val loginUseCase by container.instance<SigninWithEmailUseCase>()
//    loginUseCase.buildAction("test@test.test", "testtest")

}