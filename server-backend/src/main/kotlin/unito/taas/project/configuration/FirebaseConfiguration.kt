package unito.taas.project.configuration

import com.google.auth.oauth2.GoogleCredentials
import com.google.cloud.firestore.Firestore
import com.google.firebase.FirebaseApp
import com.google.firebase.FirebaseOptions
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.cloud.FirestoreClient
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import java.io.FileInputStream


@Configuration
class FirebaseConfiguration {

    @Bean
    fun app(): FirebaseApp {
        val options = FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.getApplicationDefault())
                .build()!!
        return FirebaseApp.initializeApp(options)
    }

    @Bean
    fun firestore(): Firestore = FirestoreClient.getFirestore()

    @Bean
    fun auth(): FirebaseAuth = FirebaseAuth.getInstance()


}
// Use a service account
