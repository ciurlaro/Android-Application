plugins {
    kotlin("multiplatform")
}

kotlin {
    js {
        nodejs()
    }

    sourceSets {

        val angularCoreVersion: String by project
        val zoneJsVersion: String by project
        val rxjsVersion: String by project

        val commonMain by getting {
            dependencies {
                api(project(":core-impl"))
            }
        }

        val jsMain by getting {
            dependencies {
                api(npm("@angular/core", angularCoreVersion))
                api(npm("rxjs", rxjsVersion))
                api(npm("zone.js", zoneJsVersion))
            }
        }
    }
}