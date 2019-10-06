import org.jetbrains.kotlin.gradle.dsl.KotlinJsCompile
import org.jetbrains.kotlin.gradle.dsl.KotlinJvmCompile

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

    tasks.withType<KotlinJvmCompile> {
        kotlinOptions {
            jvmTarget = "1.8"
            freeCompilerArgs = listOf("-Xuse-experimental=kotlin.Experimental")
        }
    }
    tasks.withType<KotlinJsCompile> {
        kotlinOptions {
            freeCompilerArgs = listOf("-Xuse-experimental=kotlin.Experimental")
        }
    }
}

tasks.create<Delete>("turboClean") {
    allprojects {
        delete(buildDir)
    }
}