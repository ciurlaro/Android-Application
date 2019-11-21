import org.jetbrains.kotlin.gradle.plugin.KotlinDependencyHandler

buildscript {
    repositories {
        google()
    }
    dependencies {
        val gmsVersion: String by project
        classpath("com.google.gms:google-services:$gmsVersion")
    }
}

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

    sourceSets["main"].apply {
        java.srcDirs(file("src/androidMain/kotlin"))
        res.srcDirs(file("src/androidMain/res"))
        resources.srcDirs(file("src/androidMain/resources"))
        manifest.srcFile(file("src/androidMain/AndroidManifest.xml"))
    }
}

apply(plugin = "com.google.gms.google-services")

kotlin {

    android {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
    }
    js {
        browser()
    }

    sourceSets {

        val ktorVersion: String by project
        val kotlinVersion: String by project
        val kodeinVersion: String by project
        val textEncodingVersion: String by project
        val firebaseJvmVersion: String by project
        val firebaseJsVersion: String by project


        val commonMain by getting {
            dependencies {
                api(project(":data"))
                api(ktor("client-core", ktorVersion))
                api(ktor("client-serialization", ktorVersion))
                api(ktor("client-mock", ktorVersion))
                api(ktor("client-logging", ktorVersion))
                api(kodein("core", kodeinVersion))
                api(kodein("erased", kodeinVersion))
            }
        }

        val androidMain by getting {
            dependencies {
                api("com.google.firebase:firebase-auth:$firebaseJvmVersion")
                api("com.google.firebase:firebase-storage:$firebaseJvmVersion")
                api("com.google.firebase:firebase-storage-ktx:$firebaseJvmVersion")
                api(ktor("client-okhttp", ktorVersion))
                api(ktor("client-serialization-jvm", ktorVersion))
                api(ktor("client-mock-jvm", ktorVersion))
                api(ktor("client-logging-jvm", ktorVersion))
                api(kodein("core-jvm", kodeinVersion))
                api(kodein("erased-jvm", kodeinVersion))
                api(kodein("framework-android-x", kodeinVersion))
                api(kotlin("reflect", kotlinVersion))
            }
        }

        val jsMain by getting {
            dependencies {
                api(ktor("client-js", ktorVersion))
                api(ktor("client-serialization-js", ktorVersion))
                api(ktor("client-mock-js", ktorVersion))
                api(ktor("client-logging-js", ktorVersion))
                api(kodein("core-js", kodeinVersion))
                api(kodein("erased-js", kodeinVersion))
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

@Suppress("unused")
fun KotlinDependencyHandler.kodein(module: String, version: String? = null): Any =
    "org.kodein.di:kodein-di-$module${version?.let { ":$version" } ?: ""}"