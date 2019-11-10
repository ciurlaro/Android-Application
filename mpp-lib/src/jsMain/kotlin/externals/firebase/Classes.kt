package externals.firebase

import kotlin.js.Promise

external interface AuthCredential {
    val providerId: String
    val signInMethod: String

    fun toJSON(): dynamic
    fun fromJSON(json: dynamic): AuthCredential?
    fun fromJSON(json: String): AuthCredential?
}

external interface OAuthCredential : AuthCredential {

    val accessToken: String?
    val idToken: String?
    val secret: String?

}

external interface AdditionalUserInfo

external interface User {
    val email: String?
    val uid: String?

    fun getIdToken(forceRefresh: Boolean = definedExternally): Promise<String>
    fun reauthenticateWithCredential(credential: AuthCredential): Promise<UserCredential>
    fun linkWithCredential(credential: AuthCredential): Promise<UserCredential>

}

external class UserCredential {
    val additionalUserInfo: AdditionalUserInfo?
    val credential: AuthCredential?
    val operationType: String?
    val user: User?

}

external class FirebaseAuth {

    val currentUser: User?

    fun createUserWithEmailAndPassword(email: String, password: String): Promise<UserCredential>
    fun signInWithCredential(credential: AuthCredential): Promise<UserCredential>
    fun fetchSignInMethodsForEmail(email: String): Promise<List<String>>
}

external interface AuthProvider {
    val providerId: String
}

external interface EmailAuthProvider : AuthProvider

external interface FacebookAuthProvider : OAuthProvider

external interface GoogleAuthProvider : OAuthProvider

external interface OAuthProvider : AuthProvider {
    fun addScope(scope: String): AuthProvider
    fun credential(idToken: String = definedExternally, accessToken: String = definedExternally): OAuthCredential
    fun setCustomParameters(customOAuthParameters: dynamic): AuthProvider
}