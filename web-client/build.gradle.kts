import com.moowork.gradle.node.yarn.YarnTask

plugins {
  id("com.github.node-gradle.node")
}

node {
  download = true
  version = "12.14.1"
}

val copyPackages: Sync by rootProject.tasks

val moveCopiedPackages = task<Sync>("moveCopiedPackages") {
  dependsOn(copyPackages)
  from(copyPackages.destinationDir)
  into("$buildDir/packages")
}

val yarnInstall by tasks.register<YarnTask>("yarnInstall") {

  group = "yarn"

  dependsOn(moveCopiedPackages)

  inputs.file("package.json")
  outputs.dir("node_modules")

  args = listOf("install")
}

val build = task<YarnTask>("build") {

  group = "ng"

  dependsOn(yarnInstall)

  inputs.dir("src")
  inputs.file("angular.json")

  inputs.dir("../build/js/packages")
  outputs.dir("dist")

  args = listOf("run", "build")

}


task<YarnTask>("serve") {

  dependsOn(build)

  group = "ng"

  args = listOf("run", "start")
}




