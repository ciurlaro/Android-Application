import com.example.myapplication.modules.buildCommonKodein
import com.example.myapplication.usecases.UseCase
import com.github.lamba92.firebasemultiplatform.auth.FirebaseAuth
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
            apiKey = "AIzaSyBxp-apzgy-EsK_wwrFh3rJPI32hjUWSA4",
            authId = "unito-taas-project.firebaseapp.com",
            databaseUrl = "https://unito-taas-project.firebaseio.com",
            projectId = "unito-taas-project",
            storageBucket = "unito-taas-project.appspot.com",
            gcmSenderId = "848647809387",
            applicationId = "1:848647809387:web:d35677d9266210b8d7c42e",
            measurementId = "G-6HSSE0RCW1"
        }
    }
    bind<FirebaseAuth>() with singleton {
        FirebaseAuth.
    }
}

suspend fun main() {


    UseCase
    val container = my.

}
