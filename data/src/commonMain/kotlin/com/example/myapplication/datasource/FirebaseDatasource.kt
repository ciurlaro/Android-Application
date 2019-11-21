package com.example.myapplication.datasource

import com.example.myapplication.entities.AuthProviders
import com.example.myapplication.entities.AuthUserEntity
import com.example.myapplication.exceptions.AuthException.*

interface FirebaseDatasource {

    /**
     * Allows to update current user email.
     * @param email new user email.
     * @throws AuthInvalidCredentialsException when email or password are wrong.
     * @throws AuthUserCollisionException when email already exists.
     * @throws AuthInvalidUserException thrown if the current user's account has been disabled,
     * deleted, or its credentials are no longer valid.
     * @throws AuthRecentLoginRequiredException thrown if the user's last sign-in time does not
     * meet the security threshold.
     * @return true if the operation ends without errors.
     */
    suspend fun updateUserEmail(email: String): Boolean

    /**
     * Allows to update current user password.
     * @param password new user password.
     * @throws AuthWeakPasswordException when password's not strong enough.
     * @throws AuthInvalidUserException thrown if the current user's account has been disabled,
     * deleted, or its credentials are no longer valid.
     * @throws AuthRecentLoginRequiredException thrown if the user's last sign-in time does not
     * meet the security threshold.
     * @return true if the operation ends without errors.
     */
    suspend fun updateUserPassword(password: String): Boolean

    /**
     * Allows to update current user nickname.
     * @param nickname new user nickname.
     * @throws AuthInvalidCredentialsException when email or password are wrong.
     * @throws AuthUserCollisionException when email already exists.
     * @throws AuthInvalidUserException thrown if the current user's account has been disabled,
     * @return true if the operation ends without errors.
     */
    suspend fun updateUserNickname(nickname: String): Boolean

    /**
     * Allows to update current user profile image.
     * @param image
     * @throws
     * @return true if the operation ends without errors.
     */
    suspend fun updateUserProfileImage(image: String): Boolean

    /**
     * Allows to login with username and password.
     * @throws AuthMalformedEmailException when email does not match its canonical form.
     * @throws AuthInvalidCredentialsException when email or password are wrong.
     * @return true if the operation ends without errors.
     */
    suspend fun loginWithEmailAndPassword(email: String, password: String): Boolean

    /**
     * Login using Facebook OAuth token.
     * @param token the Facebook OAuth token.
     * @throws AuthInvalidTokenException thrown if the token is malformed or expired.
     * @return true if the operation ends without errors.
     */
    suspend fun loginWithFacebookToken(token: String): Boolean

    /**
     * Login using Google OAuth token.
     * @param token the Google OAuth token.
     * @throws AuthInvalidTokenException thrown if the token is malformed or expired.
     * @return true if the operation ends without errors.
     */
    suspend fun loginWithGoogleToken(token: String): Boolean

    /**
     * Creates a new account on the authentication provider.
     * @param email user email
     * @param password user password
     * @throws AuthUserCollisionException when email already exists.
     * @throws AuthWeakPasswordException when password's not strong enough.
     * @throws AuthMalformedEmailException when email does not match its canonical form.
     * @return true if the operation ends without errors.
     */
    suspend fun createAccountWithEmailAndPassword(email: String, password: String): Boolean

    /**
     * Retrieves the current user linked authentication methods.
     * @throws AuthNotAuthenticatedException when not authenticated.
     * @return a list containing all authentication methods for the current user.
     */
    suspend fun getCurrentUserAuthMethods(): List<AuthProviders>

    /**
     * Adds Google authentication to the current user using a Google OAuth token
     * @param token the Google OAuth token.
     * @throws AuthInvalidCredentialsException thrown if the token is malformed or expired.
     * @throws AuthUserCollisionException thrown if there is another user account associated
     * with the given credential.
     * @throws AuthInvalidUserException thrown if the current user's account has been disabled,
     * deleted, or its credentials are no longer valid
     * @return true if the operation ends without errors.
     */
    suspend fun linkGoogleAuthProvider(token: String): Boolean

    /**
     * Adds Facebook authentication to the current user using a Facebook OAuth token
     * @param token the Facebook OAuth token.
     * @throws AuthInvalidCredentialsException thrown if the token is malformed or expired.
     * @throws AuthUserCollisionException thrown if there is another user account associated
     * with the given credential.
     * @throws AuthInvalidUserException thrown if the current user's account has been disabled,
     * deleted, or its credentials are no longer valid
     * @return true if the operation ends without errors.
     */
    suspend fun linkFacebookAuthProvider(token: String): Boolean

    /**
     * Adds email and password authentication to the current user. The email is the one linked to your account.
     * @param password the password to be used.
     * @throws AuthInvalidCredentialsException thrown if the token is malformed or expired.
     * @throws AuthUserCollisionException thrown if there is another user account associated
     * with the given credential.
     * @throws AuthInvalidUserException thrown if the current user's account has been disabled,
     * deleted, or its credentials are no longer valid
     * @throws AuthRecentLoginRequiredException thrown if the user's last sign-in time does not
     * meet the security threshold.
     * @return true if the operation ends without errors.
     */
    suspend fun linkPasswordAuthProvider(password: String): Boolean

    /**
     * Refresh the authentication using password.
     * @param password the password to be used.
     * @throws AuthNotAuthenticatedException when not authenticated.
     * @throws AuthInvalidUserException thrown if the current user's account has been disabled or deleted.
     * @throws AuthInvalidCredentialsException thrown if the credential is malformed or has expired, or if it
     * corresponds to another existing user's account. Inspect the error message.
     * @return true if the operation ends without errors.
     */
    suspend fun reauthenticateWithPassword(password: String): Boolean

    /**
     * Refresh the authentication using Google OAuth token.
     * @param token the Google OAuth token.
     * @throws AuthNotAuthenticatedException when not authenticated.
     * @throws AuthInvalidUserException thrown if the current user's account has been disabled or deleted.
     * @throws AuthInvalidCredentialsException thrown if the credential is malformed or has expired, or if it
     * corresponds to another existing user's account. Inspect the error message.
     * @return true if the operation ends without errors.
     */
    suspend fun reauthenticateWithGoogleToken(token: String): Boolean

    /**
     * Refresh the authentication using Facebook OAuth token.
     * @param token the Facebook OAuth token.
     * @throws AuthNotAuthenticatedException when not authenticated.
     * @throws AuthInvalidUserException thrown if the current user's account has been disabled or deleted.
     * @throws AuthInvalidCredentialsException thrown if the credential is malformed or has expired, or if it
     * corresponds to another existing user's account. Inspect the error message.
     * @return true if the operation ends without errors.
     */
    suspend fun reauthenticateWithFacebook(token: String): Boolean

    /**
     * Get user's associated token.
     * @throws AuthInvalidUserException thrown if the current user's account has been disabled or deleted.
     * @return Firebase user token.
     */
    suspend fun getToken(): String

    suspend fun getCurrentAuthUser(): AuthUserEntity?

    suspend fun getCurrentUserClaims(): Map<String, Boolean>

    suspend fun isCurrentUserEmailVerified(): Boolean

}