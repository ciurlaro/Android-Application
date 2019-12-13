@file:JsModule("firebase")
@file:JsQualifier("firebase.auth.EmailAuthProvider")
@file:Suppress("FunctionName", "PackageName")

package externals.firebase.auth.EmailAuthProvider

import externals.firebase.AuthCredential

external val PROVIDER_ID: String
external val EMAIL_PASSWORD_SIGN_IN_METHOD: String
external val EMAIL_LINK_SIGN_IN_METHOD: String

external fun credential(email: String, password: String): AuthCredential
external fun credentialWithLink(email: String, emailLink: String): AuthCredential