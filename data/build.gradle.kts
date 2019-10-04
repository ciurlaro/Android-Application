plugins {
    kotlin("jvm")
}

dependencies {
    val coroutinesVersion: String by project

    api("org.jetbrains.kotlinx", "kotlinx-coroutines-core", coroutinesVersion)
    api(project(":domain"))

}