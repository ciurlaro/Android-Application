package unito.taas.project

import com.google.firebase.FirebaseApp
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.UserInfo
import com.google.firebase.auth.UserRecord
import com.google.firebase.auth.UserRecord.CreateRequest
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController


@RestController
class AuthenticationController(@Autowired private val app: FirebaseApp,
                               @Autowired val auth: FirebaseAuth) {


    // tenere pwd? + spiegazione https://github.com/firebase/firebaseui-web/issues/122

    @PostMapping("create-user", produces = ["application/json"])
    fun createUser(@RequestParam email: String,
                   @RequestParam password: String,
                   @RequestParam nickname: String,
                   @RequestParam photoURL: String): Array<out UserInfo>? {

        val user = auth.createUser(CreateRequest()
                .setEmail(email)
                .setPassword(password)
                .setDisplayName(nickname)
                .setPhotoUrl(photoURL)).providerData

        auth.generateEmailVerificationLink(email)

        return user
    }


    @GetMapping("reset-user-password", produces = ["application/json"])
    fun resetUserPassword(): String? {

        // confrontare uid e mail

        return auth.generatePasswordResetLink("cesareiurlaro@gmail.com")
    }

    @PostMapping("grants-claims", produces = ["application/json"])
    fun grantsClaims(@RequestParam email: String): UserRecord? {
        val user = auth.getUserByEmail(email)
        val claims = HashMap<String, Any>()
        claims["subscriber"] = true
        auth.setCustomUserClaims(user.uid, claims)
        return user
    }

    @PostMapping("subscription-status", produces = ["application/json"])
    fun subscriptionStatus(@RequestParam email: String): Any? {
        val user = auth.getUserByEmail(email)
        return user.customClaims
    }

    @PostMapping("verification-status", produces = ["application/json"])
    fun verificationStatus(@RequestParam email: String): Any? {
        val user = auth.getUserByEmail(email)
        return hashMapOf("verified" to user.isEmailVerified)
    }

}