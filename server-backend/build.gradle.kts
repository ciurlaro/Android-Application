import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm")
    kotlin("plugin.spring")
    kotlin("plugin.jpa")
    kotlin("plugin.allopen")
    application
}

allOpen {
    annotation("javax.persistence.Entity")
    annotation("javax.persistence.Embeddable")
    annotation("javax.persistence.MappedSuperclass")
}

application {
    mainClassName = "unito.taass.project.ProjectApplicationKt"
}

java.sourceCompatibility = JavaVersion.VERSION_1_8

kotlin.sourceSets["main"].resources.srcDir("$buildDir/generated/resources")


dependencies {

    val jacksonKotlinVersion: String by project
    val firebaseAdminJvmVersion: String by project
    val h2Version: String by project
    val junitJupiterVersion: String by project
    val mimePullVersion: String by project

    implementation(springBoot("data-jpa"))
    implementation(springBoot("data-rest"))
    implementation(springBoot("web"))
    implementation(springBoot("web-services"))
    implementation("com.fasterxml.jackson.module", "jackson-module-kotlin", jacksonKotlinVersion)
    implementation(kotlin("reflect"))
    implementation(kotlin("stdlib-jdk8"))
    implementation("com.google.firebase", "firebase-admin", firebaseAdminJvmVersion)
    implementation("org.jvnet.mimepull", "mimepull", mimePullVersion)

    implementation("com.h2database", "h2", h2Version)
    implementation(springBoot("tomcat"))
    testImplementation(springBoot("test"))

    testImplementation(jupiter("api"))
    testImplementation(jupiter("engine"))

}

val copyWebFrontendInResources = task<Sync>("copyWebFrontendInResources") {
    group = "copy frontend"
    dependsOn(":web-client:build")
    from("${rootProject.childProjects["web-client"]!!.buildDir}/spa")
    into("${kotlin.sourceSets["main"].resources.srcDirs.first()}/static")
//    into("$buildDir/generated/resources/static")
}

tasks.withType<KotlinCompile> {
    dependsOn(copyWebFrontendInResources)
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "1.8"
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}



fun DependencyHandlerScope.springBoot(
    module: String,
    version: String = findProperty("springframeworkBootVersion") as String
) =
    "org.springframework.boot:spring-boot-starter-$module:$version"

fun DependencyHandlerScope.jupiter(
    module: String,
    version: String = findProperty("junitJupiterVersion") as String
) =
    "org.junit.jupiter:junit-jupiter-$module:$version"
