val kotlinVersion: String by settings
val androidGradlePluginVersion: String by settings
val gmsGradlePluginVersion: String by settings

pluginManagement {
    repositories {
        google()
        jcenter()
        mavenCentral()
        gradlePluginPortal()
        maven("https://dl.bintray.com/kotlin/kotlin-eap")
        maven("https://dl.bintray.com/kotlin/kotlin-dev")
    }
    resolutionStrategy {
        eachPlugin {
            when (requested.id.id) {
                "org.jetbrains.kotlin.jvm", "org.jetbrains.kotlin.js", "org.jetbrains.kotlin.multiplatform", "org.jetbrains.kotlin.android", "org.jetbrains.kotlin.android.extensions" ->
                    useModule("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")
                "com.android.application", "com.android.library" ->
                    useModule("com.android.tools.build:gradle:$androidGradlePluginVersion")
                "com.google.gms.google-services" -> useModule("com.google.gms:google-services:$gmsGradlePluginVersion")
                "org.jetbrains.kotlin.plugin.serialization" -> useModule("org.jetbrains.kotlin:kotlin-serialization:$kotlinVersion")
            }
        }
    }
}

include(":app", ":data", ":domain", "mpp-lib")
rootProject.name = "my-application"
//enableFeaturePreview("GRADLE_METADATA")