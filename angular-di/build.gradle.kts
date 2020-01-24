plugins {
    kotlin("multiplatform")
}

kotlin {
    js {
        nodejs()
        compilations.all {
            kotlinOptions {
                freeCompilerArgs += listOf("-Xir-produce-js", "-Xgenerate-dts")
            }
        }
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