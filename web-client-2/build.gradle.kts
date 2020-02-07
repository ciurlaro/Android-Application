plugins {
    kotlin("js")
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    maven("https://dl.bintray.com/kotlin/kotlin-eap")
    mavenCentral()
    jcenter()
}

kotlin {
    sourceSets {
        val main by getting {
            dependencies {

                val firebaseJsVersion: String by project
                val wsVersion: String by project

                implementation(npm("firebase", firebaseJsVersion))
                implementation(npm("ws", wsVersion))
            }
        }
    }
}

dependencies {
    implementation(kotlin("stdlib-js"))
    implementation("org.jetbrains.kotlinx:kotlinx-html-js:0.6.12")
    implementation(project(":kodein-di"))
}

kotlin.target.browser {

}