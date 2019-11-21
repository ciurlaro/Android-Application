import org.jetbrains.kotlin.gradle.plugin.KotlinDependencyHandler

plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization")
}

kotlin {

    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
    }
    js{
        browser()
    }

    sourceSets {

        val ktorVersion: String by project
        val kotlinxSerializationVersion: String by project

        val commonMain by getting {
            dependencies {
                api(project(":domain"))
                api(ktor("http", ktorVersion))
                api(ktor("utils", ktorVersion))
                api(serialization("runtime-common", kotlinxSerializationVersion))
            }
        }

        val jvmMain by getting {
            dependencies {
                api(ktor("http-jvm", ktorVersion))
                api(ktor("utils-jvm", ktorVersion))
                api(serialization("runtime", kotlinxSerializationVersion))
            }
        }

        val jsMain by getting {
            dependencies {
                api(ktor("http-js", ktorVersion))
                api(ktor("utils-js", ktorVersion))
                api(serialization("runtime-js", kotlinxSerializationVersion))
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
fun KotlinDependencyHandler.serialization(module: String, version: String? = null): Any =
    "org.jetbrains.kotlinx:kotlinx-serialization-$module${version?.let { ":$version" } ?: ""}"