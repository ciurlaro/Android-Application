package unito.taas.project.configuration

import com.google.auth.oauth2.GoogleCredentials
import com.google.firebase.FirebaseApp
import com.google.firebase.FirebaseOptions
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.cloud.FirestoreClient
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration


@Configuration
class FirebaseConfiguration {

    @Bean
    fun app() = FirebaseOptions.Builder().run {
        setCredentials(GoogleCredentials.getApplicationDefault())
        build().let {
            FirebaseApp.initializeApp(it)
        }!!
    }

    @Bean
    fun firestore() = FirestoreClient.getFirestore()!!

    @Bean
    fun auth() = FirebaseAuth.getInstance()!!


}
