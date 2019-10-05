plugins {
    kotlin("jvm")
}

dependencies {

    val klockVersion: String by project

    api(kotlin("stdlib-jdk8"))
    api("com.soywiz.korlibs.klock", "klock-jvm", klockVersion)

}
