package unito.taas.project.controllers

import com.google.firebase.FirebaseApp
import com.google.firebase.auth.FirebaseAuth
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController


@RestController
class UserManagementController(
        @Autowired private val app: FirebaseApp,
        @Autowired val auth: FirebaseAuth
) {

    @GetMapping("user", produces = ["application/json"])
    fun getUser(@RequestParam id: String) = with(auth.getUser(id)) {
        mapOf("id" to uid, "nickname" to displayName, "email" to email, "image" to photoUrl,
                "subscriber" to customClaims.containsKey("isSubscriber"))
    }

    @PostMapping("grantsClaims", produces = ["application/json"])
    fun grantsClaims(@RequestParam id: String) =
            auth.setCustomUserClaims(id, mapOf("isSubscriber" to true)).let { true }


    @PostMapping("revokeClaims", produces = ["application/json"])
    fun revokeClaims(@RequestParam id: String) =
            auth.setCustomUserClaims(id, emptyMap()).let { true }


    @PostMapping("isAccountSubscribed", produces = ["application/json"])
    fun getSubscriptionStatus(@RequestParam id: String) =
            auth.getUser(id).customClaims.containsKey("isSubscriber")


    @PostMapping("/isAccountVerified", produces = ["application/json"])
    fun getVerificationStatus(@RequestParam id: String) =
            auth.getUser(id).isEmailVerified

}
