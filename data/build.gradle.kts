plugins {
    kotlin("jvm")
}

dependencies {
    val coroutinesVersion: String by project
    val ktorVersion: String by project

    api("org.jetbrains.kotlinx", "kotlinx-coroutines-core", coroutinesVersion)
    api(project(":domain"))

    api(ktor("http-jvm", ktorVersion))

}


@Suppress("unused")
fun DependencyHandler.ktor(module: String, version: String? = null): Any =
    "io.ktor:ktor-$module${version?.let { ":$version" } ?: ""}"