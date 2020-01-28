import org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootPlugin

buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {

        // From JDKK 9+ some classes have been moved to Maven. Kapt needs those classes
        // to parse xml and stuff. Load them manually if the current JDK do not contains
        // them.
        if (JavaVersion.current() >= JavaVersion.VERSION_1_9) {
            logger.info("Loading JAXB classes into classpath")
            val jaxbVersion: String by project
            val javaxActivationVersion: String by project
            classpath("javax.xml.bind", "jaxb-api", jaxbVersion)
            classpath("com.sun.xml.bind", "jaxb-core", jaxbVersion)
            classpath("com.sun.xml.bind", "jaxb-impl", jaxbVersion)
            classpath("javax.activation", "activation", javaxActivationVersion)
        }
    }
}

plugins {
    kotlin("multiplatform") apply false
    id("com.android.application") apply false
}

subprojects {
    repositories {
        google()
        jcenter()
        mavenCentral()
        maven("https://jitpack.io")
        maven("https://dl.bintray.com/lamba92/com.github.lamba92")
        maven("https://dl.bintray.com/kotlin/kotlin-dev")
    }
}

task<Sync>("copyPackages") {
    group = "jsmerda"
    listOf("domain", "data", "core-impl", "angular-di").forEach {
        dependsOn("$it:compileKotlinJs")
    }
    from(file("$buildDir/js/packages")) {
        exclude("**/yarn.lock")
        exclude("**/node_modules")
        exclude("**/*.json.hash")
        exclude("package.json")
    }
    from(file("$buildDir/js/packages_imported")) {
        exclude("**/yarn.lock")
        exclude(".visited")
        exclude("**/node_modules")
        exclude("**/*.json.hash")
        exclude("package.json")
        eachFile {
            relativePath = RelativePath(
                true,
                *relativePath.segments
                    .toMutableList()
                    .apply { removeAt(1) }
                    .toTypedArray()
            )
        }
        includeEmptyDirs = false
    }
    into("$buildDir/copiedPackeges")
}

NodeJsRootPlugin.apply(project).apply {
    versions.dukat.version = "0.0.25"
}