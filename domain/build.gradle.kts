plugins {
    kotlin("multiplatform")
}

kotlin {

    jvm()
    js {
        browser()
    }

    sourceSets {

        val kotlinVersion: String by project

        val commonMain by getting {
            dependencies {

                val klockVersion: String by project

                api(kotlin("stdlib-common", kotlinVersion))
                api("com.soywiz.korlibs.klock:klock:$klockVersion")

            }
        }

        val jvmMain by getting {
            dependencies {
                api(kotlin("stdlib-jdk8", kotlinVersion))
            }
        }

        val jsMain by getting {
            dependencies {
                api(kotlin("stdlib-js", kotlinVersion))
            }
        }
    }

}
