import com.moowork.gradle.node.yarn.YarnTask

plugins {
    kotlin("multiplatform")
    id("com.moowork.node") version "1.3.1"


}

node {
    download = true
    workDir = file("${project.buildDir}/node")
    npmWorkDir = file("${project.buildDir}/node")
    yarnWorkDir = file("${project.buildDir}/node")
    nodeModulesDir = file("${project.projectDir}")
}

tasks {

    withType<Jar> {
        dependsOn("ngBuild")
        archiveBaseName.set(project.name)
    }

    val ngBuild = task<YarnTask>("ngBuild") {
        dependsOn("yarn_install")

        inputs.files(fileTree("node_modules"))
        inputs.files(fileTree("src"))
        inputs.file("angular.json")
        inputs.file("package.json")

        outputs.dir("dist")

        args = listOf("run", "build")
    }

    val webdriverUpdate = register("webdriverUpdate", YarnTask::class) {
        args = listOf("run", "update-driver")
    }



    task<YarnTask>("serve") {
        args = listOf("run", "start")
    }

    clean.get().doLast {
        println("Delete dist and node_modules")
        file("$projectDir/dist").deleteRecursively()
        file("$projectDir/node_modules").deleteRecursively()
    }
}

dependencies {
    /*--*/
    project(":")
}


