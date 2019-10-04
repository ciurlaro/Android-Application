val kotlinVersion: String by settings
val androidGradlePluginVersion: String by settings

pluginManagement {
    repositories {
        google()
        jcenter()
        mavenCentral()
        gradlePluginPortal()
    }
    resolutionStrategy {
        eachPlugin {
            when (requested.id.id) {
                "org.jetbrains.kotlin.jvm", "org.jetbrains.kotlin.android", "org.jetbrains.kotlin.android.extensions" ->
                    useModule("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")
                "com.android.application" ->
                    useModule("com.android.tools.build:gradle:$androidGradlePluginVersion")
            }
        }
    }
}

include(":app", ":data", ":domain")
rootProject.name = "My Application"
enableFeaturePreview("GRADLE_METADATA")