plugins {
    id("com.android.library")
    kotlin("android")
}

android {
    compileSdkVersion(29)
    defaultConfig {
        minSdkVersion(16)
        targetSdkVersion(29)
        versionCode = 1
        versionName = "1.0"
    }
}

dependencies {

    val firebaseVersion: String by project

    api(project(":mpp-lib"))

    api(firebase("auth", firebaseVersion))

}

@Suppress("unused")
fun DependencyHandler.ktor(module: String, version: String? = null): Any =
    "io.ktor:ktor-$module${version?.let { ":$version" } ?: ""}"

@Suppress("unused")
fun DependencyHandler.firebase(module: String, version: String? = null): Any =
    "com.google.firebase:firebase-$module${version?.let { ":$version" } ?: ""}"