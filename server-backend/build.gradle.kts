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


    // developmentOnly("org.springframework.boot:spring-boot-devtools")
    implementation("com.h2database", "h2", h2Version)
    implementation(springBoot("tomcat"))
    testImplementation(springBoot("test"))

    testImplementation("org.junit.jupiter", "junit-jupiter-api", junitJupiterVersion)
    testImplementation("org.junit.jupiter", "junit-jupiter-engine", junitJupiterVersion)

}

tasks.withType<KotlinCompile> {
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