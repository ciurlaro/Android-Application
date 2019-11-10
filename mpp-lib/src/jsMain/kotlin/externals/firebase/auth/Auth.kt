@file:JsModule("firebase")
@file:JsQualifier("firebase.auth")
@file:Suppress("FunctionName")

package externals.firebase.auth

import externals.firebase.*

external fun GoogleAuthProvider(): GoogleAuthProvider

external fun FacebookAuthProvider(): FacebookAuthProvider

external fun EmailAuthProvider(): EmailAuthProvider

external fun credential(token: String): AuthCredential

external fun OAuthProvider(name: String): OAuthProvider