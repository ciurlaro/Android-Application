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

    val ktorVersion: String by project

    api(project(":data"))

    api(ktor("client-core-jvm", ktorVersion))

}

@Suppress("unused")
fun DependencyHandler.ktor(module: String, version: String? = null): Any =
    "io.ktor:ktor-$module${version?.let { ":$version" } ?: ""}"