plugins {
    kotlin("multiplatform")
}

kotlin {
    jvm()
    js()
    sourceSets {

        val commonMain by getting {
            dependencies {

                val klockVersion: String by project

                api(kotlin("stdlib-common"))
                api("com.soywiz.korlibs.klock:klock:$klockVersion")

            }
        }

        val jvmMain by getting {
            dependencies {
                api(kotlin("stdlib-jdk8"))
            }
        }

        val jsMain by getting {
            dependencies {
                api(kotlin("stdlib-js"))
            }
        }
    }

//    val jvmMain by getting {
//        dependencies {
//            api(kotlin("stdlib-jdk8"))
//        }
//    }
//
//    val jsMain by getting {
//        dependencies {
//            api(kotlin("stdlib-js"))
//        }
//    }

}
