plugins {
    kotlin("multiplatform")
    id("se.jensim.kt2ts") version "0.11.0"
}

kotlin {

    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
    }
    js {
        browser()
    }

    sourceSets {

        val kotlinVersion: String by project
        val coroutinesVersion: String by project
        val klockVersion: String by project
        val rxjsVersion: String by project

        val commonMain by getting {
            dependencies {
                api(kotlin("stdlib-common", kotlinVersion))
                api("org.jetbrains.kotlinx:kotlinx-coroutines-core-common:$coroutinesVersion")
            }
        }

        val jvmMain by getting {
            dependencies {
                api(kotlin("stdlib-jdk8", kotlinVersion))
                api("org.jetbrains.kotlinx:kotlinx-coroutines-core:$coroutinesVersion")

            }
        }

        val jsMain by getting {
            dependencies {
                api(kotlin("stdlib-js", kotlinVersion))
                api("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:$coroutinesVersion")
            }
        }

        all {
            languageSettings.useExperimentalAnnotation("kotlin.Experimental")
        }

    }

}