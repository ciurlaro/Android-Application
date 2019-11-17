import com.moowork.gradle.node.yarn.YarnTask

plugins {
  id("com.moowork.node")
}

node {
  download = true
}

task<YarnTask>("ngBuild") {
  dependsOn("yarn_install")
  //dependsOn("npmInstall")
  inputs.dir("node_modules")
  inputs.dir("src")
  inputs.file("angular.json")
  inputs.dir("../build/js/packages_imported")
  inputs.dir("../build/js/packages")
  inputs.file("package.json")
  outputs.dir("dist")
  
  args = listOf("run", "build")
}


task<YarnTask>("serve") {
  args = listOf("run", "start")
}




