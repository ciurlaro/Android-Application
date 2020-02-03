import com.example.myapplication.modules.buildCommonKodein
import com.github.lamba92.firebasemultiplatform.core.FirebaseApp
import com.github.lamba92.firebasemultiplatform.core.initializeApp
import io.ktor.util.InternalAPI
import kotlinx.coroutines.FlowPreview
import org.kodein.di.Kodein
import org.kodein.di.erased.bind
import org.kodein.di.erased.singleton

@FlowPreview
@InternalAPI
val container by Kodein.lazy {
    import(buildCommonKodein("", "", 8080))
    bind<FirebaseApp>() with singleton {
        FirebaseApp.initializeApp {
            apiKey = "AIzaSyBxp-apzgy-EsK_wwrFh3rJPI32hjUWSA4"
            authDomain = "unito-taas-project.firebaseapp.com"
            databaseUrl = "https://unito-taas-project.firebaseio.com"
            projectId = "unito-taas-project"
            storageBucket = "unito-taas-project.appspot.com"
            gcmSenderId = "848647809387"
            applicationId = "1:848647809387:web:d35677d9266210b8d7c42e"
            measurementId = "G-6HSSE0RCW1"
        }
    }


//    bind<ArenaTournamentRepository>() with singleton {
//        ArenaTournamentRepositoryImplementation(
//            instance(), instance(), instance(), instance(), instance(),
//            instance(), instance(), instance(), instance(), instance(),
//            instance(), instance(), instance(), instance(), instance()
//        )
//    }

}

suspend fun main() {

}


//
//fun main() {
//
//    println("Hello..")
//
//    doStuff()
//
//    println(".. World!")
//}
//
//fun doStuff() = with(document) {
//    getElementById("footer7-h")?.apply {
//        id = "OVOLLO"
//        innerHTML = create.h1 { +"LOOOOOOL" }.outerHTML
//    }
//}
//
//private fun veryFirstDoStuff() = with(document) {
//
//    val div = createElement("div").apply {
//        appendChild(createElement("h1").apply { textContent = "Hello" })
//        appendChild(createElement("button").apply {
//            textContent = "Click me"
//            addEventListener("click", {
//                println("clicked")
//            })
//        })
//    }
//
//    getElementById("root")?.apply {
//        appendChild(div)
//    }
//}


