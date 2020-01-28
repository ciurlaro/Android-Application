plugins {
    kotlin("multiplatform")
}

kotlin {
    js {
        nodejs()
    }

    sourceSets {

        val commonMain by getting {
            dependencies {
                api(project(":core-impl"))
            }
        }

        val jsMain by getting {
            dependencies {
                api(npm("@angular/core", "8.2.14"))
            }
        }
    }
}