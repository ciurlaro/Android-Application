import com.moowork.gradle.node.yarn.YarnTask

plugins {
  id("com.github.node-gradle.node")
}

node {
  download = true
  version = "12.14.1"
}

val isJsEnabled: String by project

val moveCopiedPackages = if (isJsEnabled.toBoolean())
  task<Sync>("moveCopiedPackages") {
    val copyPackages: Sync by rootProject.tasks
    dependsOn(copyPackages)
    from(copyPackages.destinationDir)
    into("$buildDir/packages")
  }  else null

val yarnInstall by tasks.register<YarnTask>("yarnInstall") {

  group = "yarn"

  moveCopiedPackages?.let { dependsOn(it) }

  inputs.file("package.json")
  outputs.dir("node_modules")

  args = listOf("install")
}

val build = task<YarnTask>("build") {

  group = "ng"

  dependsOn(yarnInstall)

  inputs.dir("src")
  inputs.file("angular.json")

  outputs.dir("$buildDir/spa")

  args = listOf("run", "build")

}

val buildMock = task<YarnTask>("buildMock") {

  group = "ng"

  dependsOn(yarnInstall)

  inputs.dir("src")
  inputs.file("angular.json")

  outputs.dir("$buildDir/spa")

  args = listOf("run", "build", "-c=mock")

}


task<YarnTask>("serve") {

  dependsOn(build)

  group = "ng"

  args = listOf("run", "start")
}

task<YarnTask>("serveMock") {

  dependsOn(build)

  group = "ng"

  args = listOf("run", "mock")
}




