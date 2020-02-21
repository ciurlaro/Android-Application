package unito.taas.project.configurations

import com.google.auth.oauth2.GoogleCredentials
import com.google.firebase.FirebaseApp
import com.google.firebase.FirebaseOptions
import com.google.firebase.auth.FirebaseAuth
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration


@Configuration
class FirebaseConfiguration {

    @Bean
    fun app() = FirebaseApp.initializeApp(
            FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.getApplicationDefault())
                    .build())!!

    @Bean
    fun auth() = FirebaseAuth.getInstance()!!

}
