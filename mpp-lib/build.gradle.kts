import org.jetbrains.kotlin.gradle.plugin.KotlinDependencyHandler

plugins {
    kotlin("multiplatform")
}

kotlin {

    jvm()
    js()

    sourceSets {

        val ktorVersion: String by project
        val kodeinVersion: String by project
        val firebaseJsVersion: String by project

        all {
            dependencies {
                api("org.kodein.di:kodein-di-core:$kodeinVersion")
                api("org.kodein.di:kodein-di-erased:$kodeinVersion")
            }
        }

        val commonMain by getting {
            dependencies {
                api(project(":data"))
                api(ktor("client-core", ktorVersion))
            }
        }

        val jvmMain by getting {
            dependencies {
                api(project(":data"))
                api(ktor("client-core-jvm", ktorVersion))
                api(kotlin("reflect"))
            }
        }

        val jsMain by getting {
            dependencies {
                api(project(":data"))
                api(ktor("client-core-js", ktorVersion))
                api(npm("firebase", firebaseJsVersion))
            }
        }
    }

}

@Suppress("unused")
fun KotlinDependencyHandler.ktor(module: String, version: String? = null): Any =
    "io.ktor:ktor-$module${version?.let { ":$version" } ?: ""}"