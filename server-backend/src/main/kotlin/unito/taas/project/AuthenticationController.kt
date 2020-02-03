package unito.taas.project

import com.google.firebase.FirebaseApp
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.UserRecord.CreateRequest
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController


@RestController
class AuthenticationController(
    @Autowired private val app: FirebaseApp,
    @Autowired val auth: FirebaseAuth
) {

    @PostMapping("create-user", produces = ["application/json"])
    fun createUser(
        @RequestParam email: String,
        @RequestParam password: String,
        @RequestParam nickname: String,
        @RequestParam photoURL: String
    ) = with(auth) {
        createUser(
            CreateRequest().apply {
                setEmail(email)
                setPassword(password)
                setDisplayName(nickname)
                setPhotoUrl(photoURL)
            }
        ).providerData.filterNotNull().also {
            generateEmailVerificationLink(email)
        }
    }


    @GetMapping("reset-user-password", produces = ["application/json"])
    fun resetUserPassword() =
        // confrontare uid e mail
        auth.generatePasswordResetLink("cesareiurlaro@gmail.com")!!


    @PostMapping("grants-claims", produces = ["application/json"])
    fun grantsClaims(@RequestParam email: String) = with(auth) {
        getUserByEmail(email).apply {
            setCustomUserClaims(uid, mapOf("subscriber" to true))
        }
    }!!

    @PostMapping("subscription-status", produces = ["application/json"])
    fun subscriptionStatus(@RequestParam email: String) =
        auth.getUserByEmail(email).customClaims.orEmpty()

    @PostMapping("verification-status", produces = ["application/json"])
    fun verificationStatus(@RequestParam email: String) =
        hashMapOf("verified" to auth.getUserByEmail(email).isEmailVerified)


}