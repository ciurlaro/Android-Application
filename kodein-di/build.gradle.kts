import com.google.gson.Gson
import com.google.gson.GsonBuilder
import com.google.gson.JsonObject
import com.google.gson.JsonParser
import groovy.json.JsonSlurper
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
        compilations.all {
            kotlinOptions {
                freeCompilerArgs += listOf("-Xir-produce-js", "-Xgenerate-dts")
            }

            compileKotlinTask.doLast {
//                val workingDir = "${rootProject.buildDir}/js/packages/${rootProject.name}-${project.name}"
//                copy {
//                    from("declarations")
//                    into(workingDir)
//                }
//                val jsonFile = file("$workingDir/package.json")
//                val gson = GsonBuilder().setPrettyPrinting().create()
//                val jsonObj = JsonParser().parse(jsonFile.readText()).asJsonObject
//                jsonObj.addProperty("typings", "index.d.ts")
//                jsonFile.writeText(gson.toJson(jsonObj))
            }
        }
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
                api(project(":core-impl"))
                api(kodein("core-jvm", kodeinVersion))
                api(kodein("erased-jvm", kodeinVersion))
                api(kodein("framework-android-x", kodeinVersion))
            }
        }

        val jsMain by getting {
            dependencies {
                api(project(":core-impl"))
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
fun KotlinDependencyHandler.kodein(module: String, version: String? = null): Any =
    "org.kodein.di:kodein-di-$module${version?.let { ":$version" } ?: ""}"

