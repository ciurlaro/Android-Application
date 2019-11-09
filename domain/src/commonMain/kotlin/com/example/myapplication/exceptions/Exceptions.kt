package com.example.myapplication.exceptions

class AuthWeakPasswordException(message: String? = null) : Throwable(message)

class AuthMalformedEmailException(message: String? = null) : Throwable(message)

class AuthInvalidCredentialsException(message: String? = null) : Throwable(message)

class AuthNotAuthenticatedException(message: String? = null) : Throwable(message)

class AuthInvalidTokenException(message: String? = null) : Throwable(message)

class AuthUserCollisionException(message: String? = null) : Throwable(message)

class AuthInvalidUserException(message: String? = null) : Throwable(message)

class AuthRecentLoginRequiredException(message: String? = null) : Throwable(message)