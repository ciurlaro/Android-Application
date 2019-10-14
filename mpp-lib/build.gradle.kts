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
}

kotlin {

    android {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
    }
    js()

    sourceSets {

        val ktorVersion: String by project
        val kotlinVersion: String by project
        val kodeinVersion: String by project

        val commonMain by getting {
            dependencies {
                api(project(":data"))
                api(ktor("client-core", ktorVersion))
                api(kodein("core", kodeinVersion))
                api(kodein("erased", kodeinVersion))
            }
        }

        val androidMain by getting {
            dependencies {
                api(project(":data"))
                api(ktor("client-okhttp", ktorVersion))
                api(ktor("client-serialization-jvm", ktorVersion))
                api(kodein("core-jvm", kodeinVersion))
                api(kodein("erased-jvm", kodeinVersion))
                api(kotlin("reflect", kotlinVersion))
            }
        }

        val jsMain by getting {
            dependencies {
                api(project(":data"))
                api(ktor("client-js", ktorVersion))
                api(ktor("client-serialization-js", ktorVersion))
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
fun KotlinDependencyHandler.ktor(module: String, version: String? = null): Any =
    "io.ktor:ktor-$module${version?.let { ":$version" } ?: ""}"

@Suppress("unused")
fun KotlinDependencyHandler.kodein(module: String, version: String? = null): Any =
    "org.kodein.di:kodein-di-$module${version?.let { ":$version" } ?: ""}"