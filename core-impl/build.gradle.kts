import org.jetbrains.kotlin.gradle.plugin.KotlinDependencyHandler

plugins {
    id("com.android.library")
    kotlin("multiplatform")
}

android {

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }

    compileSdkVersion(29)
    buildToolsVersion("29.0.2")

    sourceSets.all {
        java.srcDirs(file("src/android${name.capitalize()}/kotlin"))
        res.srcDirs(file("src/android${name.capitalize()}/res"))
        resources.srcDirs(file("src/android${name.capitalize()}/resources"))
        manifest.srcFile(file("src/android${name.capitalize()}/AndroidManifest.xml"))
    }

    buildTypes["debug"].setMatchingFallbacks("release")

}

kotlin {

    android {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
    }
    js {
        nodejs()
    }

    sourceSets {

        val ktorVersion: String by project
        val kotlinVersion: String by project
        val textEncodingVersion: String by project
        val firebaseMultiplatformVersion: String by project
        val firebaseJsVersion: String by project

        val commonMain by getting {
            dependencies {
                api(project(":data"))
                api(ktor("client-core", ktorVersion))
                api(ktor("client-serialization", ktorVersion))
                api(ktor("client-mock", ktorVersion))
                api(ktor("client-logging", ktorVersion))
                api("com.github.lamba92:firebase-multiplatform-auth:$firebaseMultiplatformVersion")
                api("com.github.lamba92:firebase-multiplatform-storage:$firebaseMultiplatformVersion")
            }
        }

        val androidMain by getting {
            dependencies {
                api(ktor("client-okhttp", ktorVersion))
                api(ktor("client-serialization-jvm", ktorVersion))
                api(ktor("client-mock-jvm", ktorVersion))
                api(ktor("client-logging-jvm", ktorVersion))
                api(kotlin("reflect", kotlinVersion))
            }
        }

        val jsMain by getting {
            dependencies {
                api(ktor("client-js", ktorVersion))
                api(ktor("client-serialization-js", ktorVersion))
                api(ktor("client-mock-js", ktorVersion))
                api(ktor("client-logging-js", ktorVersion))
                api(npm("text-encoding", textEncodingVersion))
                api(npm("firebase", firebaseJsVersion))
            }
        }

        all {
            languageSettings.useExperimentalAnnotation("kotlin.Experimental")
        }

    }
}

@Suppress("unused")
fun KotlinDependencyHandler.ktor(module: String, version: String? = null): Any =
    "io.ktor:ktor-$module${version?.let { ":$version" } ?: ""}"

