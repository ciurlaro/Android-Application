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
logger.info(buildString {
    appendln()
    val jString = JavaVersion.current().toString()
    appendln("************************")
    appendln("*  JAVA VERSION: ${jString.padEnd(5)} *")
    appendln("************************")
    appendln()
})
subprojects {
    repositories {
        google()
        jcenter()
        mavenCentral()
        maven("https://dl.bintray.com/kotlin/kotlin-eap")
    }
}

tasks.create<Delete>("turboClean") {
    group = "clean"
    allprojects {
        delete(rootProject.buildDir)
    }
}


val nodePackagesCopyTask by tasks.register<Copy>("copyNodePackagesFromSubprojects") {
    evaluationDependsOnChildren()
    into(file("$buildDir/nodePackages"))
    subprojects {
        if ("buildNodePackage" in tasks.map { it.name }) {
            val t by tasks.named<Copy>("buildNodePackage")
            dependsOn(t)
            from(t.destinationDir) {
                into("${rootProject.name}-$name")
            }
        }
    }
}

tasks.register<Zip>("zipNodePackages") {
    subprojects {
        tasks.findByName("jsJar")?.let { dependsOn(it) }
    }
    from("$buildDir/js") {
        include("*")
        include("**/*")
        exclude("node_modules")
        exclude("node_modules.state")
        exclude("yarn.lock")
        exclude("*/.visited")

    }
    archiveBaseName.set("node_package")
    destinationDirectory.set(buildDir)
}