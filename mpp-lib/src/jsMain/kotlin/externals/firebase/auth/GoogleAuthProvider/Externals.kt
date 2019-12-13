@file:JsModule("firebase")
@file:JsQualifier("firebase.auth.GoogleAuthProvider")
@file:Suppress("FunctionName", "PackageName")

package externals.firebase.auth.GoogleAuthProvider

import externals.firebase.OAuthCredential

external val PROVIDER_ID: String
external val GOOGLE_SIGN_IN_METHOD: String

external fun credential(idToken: String? = definedExternally, accessToken: String? = definedExternally): OAuthCredential