import org.jetbrains.kotlin.gradle.plugin.KotlinDependencyHandler

plugins {
    kotlin("multiplatform")
}

kotlin {

    jvm()
    js()

    sourceSets {

        val ktorVersion: String by project

        val commonMain by getting {
            dependencies {

                api(project(":domain"))
                api(ktor("http", ktorVersion))
                api(ktor("utils", ktorVersion))

            }
        }

        val jvmMain by getting {
            dependencies {
                api(project(":domain"))
                api(ktor("http-jvm", ktorVersion))
                api(ktor("utils-jvm", ktorVersion))
            }
        }

        val jsMain by getting {
            dependencies {
                api(project(":domain"))
                api(ktor("http-js", ktorVersion))
                api(ktor("utils-js", ktorVersion))
            }
        }

    }

}

@Suppress("unused")
fun KotlinDependencyHandler.ktor(module: String, version: String? = null): Any =
    "io.ktor:ktor-$module${version?.let { ":$version" } ?: ""}"