import org.jetbrains.kotlin.gradle.targets.js.npm.tasks.KotlinPackageJsonTask

plugins {
    kotlin("multiplatform")
}

kotlin {

    jvm {
        compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
    }
    js{
        browser()
    }

    sourceSets {

        val kotlinVersion: String by project
        val coroutinesVersion: String by project
        val klockVersion: String by project

        val commonMain by getting {
            dependencies {
                api(kotlin("stdlib-common", kotlinVersion))
                api("com.soywiz.korlibs.klock:klock:$klockVersion")
                api("org.jetbrains.kotlinx:kotlinx-coroutines-core-common:$coroutinesVersion")
            }
        }

        val jvmMain by getting {
            dependencies {
                api(kotlin("stdlib-jdk8", kotlinVersion))
                api("com.soywiz.korlibs.klock:klock-jvm:$klockVersion")
                api("org.jetbrains.kotlinx:kotlinx-coroutines-core:$coroutinesVersion")

            }
        }

        val jsMain by getting {
            dependencies {
                api(kotlin("stdlib-js", kotlinVersion))
                api("com.soywiz.korlibs.klock:klock-js:$klockVersion")
                api("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:$coroutinesVersion")
            }
        }

        all {
            languageSettings.useExperimentalAnnotation("kotlin.Experimental")
        }

    }

}


tasks.register<Copy>("buildNodePackage") {
    group = "nodejs"
    val jsJar by tasks.named<Jar>("jsJar")
    val jsPackageJson by tasks.named<KotlinPackageJsonTask>("jsPackageJson")
    dependsOn(jsJar, jsPackageJson)

    into(file("$buildDir/nodePackage"))

    from(jsPackageJson.packageJson)

    from(zipTree(jsJar.archiveFile)) {
        include("*.js")
        into("kotlin")
    }

}
