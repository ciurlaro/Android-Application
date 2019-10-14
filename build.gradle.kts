plugins {
    kotlin("multiplatform") apply false
    id("com.android.application") apply false
}

subprojects {
    repositories {
        google()
        jcenter()
        mavenCentral()
    }
}

tasks.create<Delete>("turboClean") {
    allprojects {
        delete(buildDir)
    }
}