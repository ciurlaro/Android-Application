package com.example.myapplication.repositories


import com.example.myapplication.entities.*
import com.example.myapplication.exceptions.AuthException.*
import com.soywiz.klock.DateTimeTz

interface ArenaTournamentRepository {

    suspend fun createGameMode(modeName: String): ModeEntity

    suspend fun createGame(
        name: String,
        availableModes: List<String>,
        image: String,
        icon: String
    ): GameEntity

    suspend fun createMatch(
        matchDateTime: DateTimeTz,
        playersCount: Int,
        isRegistrationPossible: Boolean,
        tournament: TournamentEntity
    ): MatchEntity

    suspend fun createRegistration(
        user: UserEntity,
        tournament: TournamentEntity,
        outcome: String? = null
    ): RegistrationEntity

    suspend fun createTournament(
        playersNumber: Int,
        title: String,
        tournamentDescription: String,
        tournamentMode: String,
        admin: UserEntity,
        game: GameEntity
    ): TournamentEntity

    suspend fun updateCurrentUserEmail(email: String): Boolean
    suspend fun updateCurrentUserPassword(password: String): Boolean
    suspend fun updateCurrentUserNickname(nickname: String): Boolean
    suspend fun updateCurrentUserProfileImage(image: ByteArray): Boolean

    suspend fun getGameByName(name: String): GameEntity
    suspend fun searchGamesByName(name: String, page: Int): List<GameEntity>
    suspend fun getAllGames(page: Int): List<GameEntity>
    suspend fun getGamesContainingName(name: String, page: Int): List<GameEntity>
    suspend fun getGamesByMode(mode: String, page: Int): List<GameEntity>

    suspend fun getTournamentById(id: Long): TournamentEntity
    suspend fun getTournamentsByMode(mode: String, page: Int): List<TournamentEntity>
    suspend fun getTournamentsByGame(gameName: String, page: Int): List<TournamentEntity>
    suspend fun getTournamentsByUser(userId: String, page: Int): List<TournamentEntity>
    suspend fun getShowCaseTournaments(page: Int): List<TournamentEntity>
    suspend fun getTournamentsContainingTitle(title: String, page: Int): List<TournamentEntity>
    suspend fun searchTournaments(title: String, gameId: String?, page: Int): List<TournamentEntity>

    suspend fun getMatchById(id: Long): MatchEntity
    suspend fun getMatchesByTournament(tournamentId: Long, page: Int): List<MatchEntity>
    suspend fun getMatchesByGame(gameName: String, page: Int): List<MatchEntity>
    suspend fun getMatchesAfterDate(dateTime: DateTimeTz, page: Int): List<MatchEntity>
    suspend fun getMatchesAvailable(page: Int): List<MatchEntity>
    suspend fun getMatchesByUser(userId: String, page: Int): List<MatchEntity>

    suspend fun getRegistrationById(id: Long): RegistrationEntity
    suspend fun getRegistrationsByMatch(matchId: Long, page: Int): List<RegistrationEntity>
    suspend fun getRegistrationsByUser(userId: String, page: Int): List<RegistrationEntity>
    suspend fun getRegistrationByUserAndMatch(userId: String, matchId: Long, page: Int): RegistrationEntity?

    suspend fun getUserById(id: String): UserEntity

    suspend fun getCurrentUser(): UserEntity?

    suspend fun isCurrentUserEmailVerified(): Boolean

    /**
     * Allows to login with username and password.
     * @throws AuthMalformedEmailException when email does not match its canonical form.
     * @throws AuthInvalidCredentialsException when email or password are wrong.
     * @return true if the operation ends without errors.
     */
    suspend fun loginWithEmailAndPassword(email: String, password: String): Boolean

    /**
     * Login using Facebook OAuth token.
     * @throws AuthInvalidTokenException thrown if the token is malformed or expired.
     * @return true if the operation ends without errors.
     * @param token the Facebook OAuth token.
     */
    suspend fun loginWithFacebookToken(token: String): Boolean

    /**
     * Login using Google OAuth token.
     * @throws AuthInvalidTokenException thrown if the token is malformed or expired.
     * @return true if the operation ends without errors.
     * @param token the Google OAuth token.
     */
    suspend fun loginWithGoogleToken(token: String): Boolean

    /**
     * Logout using Firebase Auth
     */
    suspend fun logout()

    /**
     * Creates a new account on the authentication provider.
     * @throws AuthUserCollisionException when email already exists.
     * @throws AuthWeakPasswordException when password's not strong enough.
     * @throws AuthMalformedEmailException when email does not match its canonical form.
     * @return true if the operation ends without errors.
     */
    suspend fun createAccountWithEmailAndPassword(email: String, password: String): Boolean

    /**
     * Retrieves the current user linked authentication methods.
     * @throws AuthNotAuthenticatedException when not authenticated.
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
     */
    suspend fun reauthenticateWithPassword(password: String): Boolean

    /**
     * Refresh the authentication using Google OAuth token.
     * @param token the Google OAuth token.
     * @throws AuthNotAuthenticatedException when not authenticated.
     * @throws AuthInvalidUserException thrown if the current user's account has been disabled or deleted.
     * @throws AuthInvalidCredentialsException thrown if the credential is malformed or has expired, or if it
     * corresponds to another existing user's account. Inspect the error message.
     */
    suspend fun reauthenticateWithGoogleToken(token: String): Boolean

    /**
     * Refresh the authentication using Facebook OAuth token.
     * @param token the Facebook OAuth token.
     * @throws AuthNotAuthenticatedException when not authenticated.
     * @throws AuthInvalidUserException thrown if the current user's account has been disabled or deleted.
     * @throws AuthInvalidCredentialsException thrown if the credential is malformed or has expired, or if it
     * corresponds to another existing user's account. Inspect the error message.
     */
    suspend fun reauthenticateWithFacebook(token: String): Boolean

    suspend fun isCurrentUserSubscriber(): Boolean

}