plugins {
    kotlin("multiplatform")
}

kotlin {

    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
    }
    js()

    val kotlinVersion: String by project
    val coroutinesVersion: String by project
    val klockVersion: String by project

    sourceSets["commonMain"].dependencies {
        api(kotlin("stdlib-common", kotlinVersion))
        api("org.jetbrains.kotlinx:kotlinx-coroutines-core-common:$coroutinesVersion")
        api("com.soywiz.korlibs.klock:klock:$klockVersion")
    }

    sourceSets["jvmMain"].dependencies {
        api(kotlin("stdlib-jdk8", kotlinVersion))
        api("org.jetbrains.kotlinx:kotlinx-coroutines-core:$coroutinesVersion")
    }

    sourceSets["jsMain"].dependencies {
        api(kotlin("stdlib-js", kotlinVersion))
        api("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:$coroutinesVersion")
    }

    sourceSets.all {
        languageSettings.useExperimentalAnnotation("kotlin.Experimental")
    }

}
