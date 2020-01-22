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

    sourceSets.all {
        java.srcDirs(file("src/android${name.capitalize()}/kotlin"))
        res.srcDirs(file("src/android${name.capitalize()}/res"))
        resources.srcDirs(file("src/android${name.capitalize()}/resources"))
        manifest.srcFile(file("src/android${name.capitalize()}/AndroidManifest.xml"))
    }

    buildTypes["debug"].setMatchingFallbacks("release")

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

        val kodeinVersion: String by project

        val commonMain by getting {
            dependencies {
                api(project(":core-impl"))
                api(kodein("core", kodeinVersion))
                api(kodein("erased", kodeinVersion))
            }
        }

        val androidMain by getting {
            dependencies {
                api(kodein("core-jvm", kodeinVersion))
                api(kodein("erased-jvm", kodeinVersion))
                api(kodein("framework-android-x", kodeinVersion))
            }
        }

        val jsMain by getting {
            dependencies {
                api(kodein("core-js", kodeinVersion))
                api(kodein("erased-js", kodeinVersion))
            }
        }

        all {
            languageSettings.useExperimentalAnnotation("kotlin.Experimental")
        }
    }
}

@Suppress("unused")
fun org.jetbrains.kotlin.gradle.plugin.KotlinDependencyHandler.kodein(module: String, version: String? = null): Any =
    "org.kodein.di:kodein-di-$module${version?.let { ":$version" } ?: ""}"