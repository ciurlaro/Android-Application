plugins {
    kotlin("multiplatform")
}

kotlin {
    js {
        nodejs()
    }

    sourceSets {
        val jsMain by getting {
            dependencies {
                api(project(":core-impl"))
                api(npm("@angular/core", "8.2.14"))
            }
        }
    }
}