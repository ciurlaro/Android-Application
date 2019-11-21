import com.moowork.gradle.node.yarn.YarnTask

plugins {
  id("com.moowork.node")
}

node {
  download = true
}

val yarnInstall by tasks.register<YarnTask>("yarnInstall") {

  group = "yarn"

  dependsOn(rootProject.tasks["copyPackages"])

  inputs.file("package.json")
  outputs.dir("node_modules")

  args = listOf("install")
}

task<YarnTask>("build") {

  group = "ng"

  dependsOn(yarnInstall)

  inputs.dir("src")
  inputs.file("angular.json")

  inputs.dir("../build/js/packages")
  outputs.dir("dist")

  args = listOf("run", "build")

}


task<YarnTask>("serve") {

  group = "ng"

  args = listOf("run", "start")
}




