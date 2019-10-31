plugins {
    kotlin("multiplatform") apply false
    id("com.android.application") apply false
}

subprojects {
    repositories {
        google()
        jcenter()
        mavenCentral()
        maven("https://dl.bintray.com/kotlin/kotlin-eap")
    }
}

tasks.create<Delete>("turboClean") {
    delete(rootProject.buildDir)
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