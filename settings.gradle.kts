pluginManagement {

    repositories {
        google()
        jcenter()
        mavenCentral()
        gradlePluginPortal()
        maven("https://dl.bintray.com/kotlin/kotlin-dev")
    }

    resolutionStrategy {
        eachPlugin {

            val kotlinVersion: String by settings
            val androidGradlePluginVersion: String by settings
            val gmsGradlePluginVersion: String by settings
            val nodePluginVersion: String by settings
            val nodePluginForkVersion: String by settings

            when (requested.id.id) {
                "org.jetbrains.kotlin.jvm", "org.jetbrains.kotlin.js", "org.jetbrains.kotlin.multiplatform", "org.jetbrains.kotlin.android", "org.jetbrains.kotlin.android.extensions" ->
                    useModule("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")
                "com.android.application", "com.android.library" ->
                    useModule("com.android.tools.build:gradle:$androidGradlePluginVersion")
                "com.google.gms.google-services" -> useModule("com.google.gms:google-services:$gmsGradlePluginVersion")
                "org.jetbrains.kotlin.plugin.serialization" -> useModule("org.jetbrains.kotlin:kotlin-serialization:$kotlinVersion")
                "com.moowork.node" -> useModule("com.moowork.gradle:gradle-node-plugin:$nodePluginVersion")
                "com.github.node-gradle.node" -> useModule("com.github.node-gradle:gradle-node-plugin:$nodePluginForkVersion")
            }
        }
    }

}

include(":data", ":domain", "core-impl", ":kodein-di", "web-client-2", "angular-di", ":app")
rootProject.name = "my-application"

//if (file("../FirebaseMultiplatform").run { exists() && isDirectory })
//    includeFirebaseMultiplatform("../FirebaseMultiplatform")
//else if (file("../firebase-multiplatform").run { exists() && isDirectory })
//    includeFirebaseMultiplatform("../firebase-multiplatform")
//
//fun includeFirebaseMultiplatform(path: String) =
//    includeBuild(path) {
//        dependencySubstitution {
//            substitute(module("com.github.lamba92:firebase-multiplatform-core")).with(project(":core"))
//            substitute(module("com.github.lamba92:firebase-multiplatform-core-js")).with(project(":core"))
//            substitute(module("com.github.lamba92:firebase-multiplatform-core-android")).with(project(":core"))
//            substitute(module("com.github.lamba92:firebase-multiplatform-core-metadata")).with(project(":core"))
//            substitute(module("com.github.lamba92:firebase-multiplatform-auth")).with(project(":auth"))
//            substitute(module("com.github.lamba92:firebase-multiplatform-auth-js")).with(project(":auth"))
//            substitute(module("com.github.lamba92:firebase-multiplatform-auth-android")).with(project(":auth"))
//            substitute(module("com.github.lamba92:firebase-multiplatform-auth-metadata")).with(project(":auth"))
//            substitute(module("com.github.lamba92:firebase-multiplatform-storage")).with(project(":storage"))
//            substitute(module("com.github.lamba92:firebase-multiplatform-storage-js")).with(project(":storage"))
//            substitute(module("com.github.lamba92:firebase-multiplatform-storage-android")).with(project(":storage"))
//            substitute(module("com.github.lamba92:firebase-multiplatform-storage-metadata")).with(project(":storage"))
//        }
//    }