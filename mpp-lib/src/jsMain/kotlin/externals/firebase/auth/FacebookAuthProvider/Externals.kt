@file:JsModule("firebase")
@file:JsQualifier("firebase.auth.FacebookAuthProvider")
@file:Suppress("FunctionName", "PackageName")

package externals.firebase.auth.FacebookAuthProvider

import externals.firebase.OAuthCredential

external val FACEBOOK_SIGN_IN_METHOD: String
external val PROVIDER_ID: String

external fun credential(token: String): OAuthCredential