plugins {
    kotlin("multiplatform")
}

kotlin {

    jvm {
        compilations.all {
            kotlinOptions {
                jvmTarget = "1.8"
                freeCompilerArgs = listOf("-Xuse-experimental=kotlin.Experimental")
                output
            }
        }
    }
    js {
        browser()
        compilations.all {
            kotlinOptions {
                moduleKind = "amd"
                freeCompilerArgs = listOf("-Xuse-experimental=kotlin.Experimental")
            }
        }
    }

    sourceSets {

        val kotlinVersion: String by project
        val coroutinesVersion: String by project

        val commonMain by getting {
            dependencies {

                val klockVersion: String by project

                api(kotlin("stdlib-common", kotlinVersion))
                api("org.jetbrains.kotlinx:kotlinx-coroutines-core-common:$coroutinesVersion")
                api("com.soywiz.korlibs.klock:klock:$klockVersion")

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
    }

}
