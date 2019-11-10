package com.example.myapplication.exceptions

sealed class AuthException(message: String? = null) : Throwable(message) {

    class AuthGenericException(message: String? = null) : AuthException(message)

    class AuthWeakPasswordException(message: String? = null) : AuthException(message)

    class AuthMalformedEmailException(message: String? = null) : AuthException(message)

    class AuthInvalidCredentialsException(message: String? = null) : AuthException(message)

    class AuthNotAuthenticatedException(message: String? = null) : AuthException(message)

    class AuthInvalidTokenException(message: String? = null) : AuthException(message)

    class AuthUserCollisionException(message: String? = null) : AuthException(message)

    class AuthInvalidUserException(message: String? = null) : AuthException(message)

    class AuthRecentLoginRequiredException(message: String? = null) : AuthException(message)
}