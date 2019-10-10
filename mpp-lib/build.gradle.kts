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
            kotlinOptions {
                jvmTarget = "1.8"
                freeCompilerArgs = listOf("-Xuse-experimental=kotlin.Experimental")
            }
        }
    }
    js {
        browser()
        compilations.all {
            kotlinOptions {
                freeCompilerArgs = listOf("-Xuse-experimental=kotlin.Experimental")
            }
        }
    }

    sourceSets {

        val ktorVersion: String by project
        val kotlinVersion: String by project
        val kodeinVersion: String by project

        all {
            dependencies {
                api(kodein("core", kodeinVersion))
                api(kodein("erased", kodeinVersion))
            }
        }

        val commonMain by getting {
            dependencies {
                api(project(":data"))
                api(ktor("client-auth", ktorVersion))
                api(ktor("client-json", ktorVersion))
                api(ktor("client-serialization", ktorVersion))
                api(ktor("client-core", ktorVersion))
            }
        }

        val androidMain by getting {
            dependencies {
                api(project(":data"))
                api(ktor("client-okhttp", ktorVersion))
                api(ktor("client-serialization-jvm", ktorVersion))
                api(kotlin("reflect", kotlinVersion))
            }
        }

        val jsMain by getting {
            dependencies {
                api(project(":data"))
                api(ktor("client-js", ktorVersion))
                api(ktor("client-serialization-js", ktorVersion))
            }
        }
    }

}


@Suppress("unused")
fun KotlinDependencyHandler.ktor(module: String, version: String? = null): Any =
    "io.ktor:ktor-$module${version?.let { ":$version" } ?: ""}"

@Suppress("unused")
fun KotlinDependencyHandler.kodein(module: String, version: String? = null): Any =
    "org.kodein.di:kodein-di-$module${version?.let { ":$version" } ?: ""}"