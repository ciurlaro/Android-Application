plugins {
    id("com.android.application")
    kotlin("android")
    kotlin("android.extensions")
}

android {

    kotlinOptions {
        jvmTarget = "1.8"
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }

    compileSdkVersion(29)
    buildToolsVersion("29.0.2")
    defaultConfig {
        applicationId = "com.example.myapplication"
        minSdkVersion(22)
        targetSdkVersion(29)
        versionCode = 1
        versionName = "1.0"
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    signingConfigs {
        create("default") {
            storeFile = file("my-release-key.keystore")
            storePassword = "abcdef1234"
            keyAlias = "alias_name"
            keyPassword = "abcdef1234"
        }
    }

    buildTypes {

        all {
            manifestPlaceholders = mapOf("ApplicationName" to "Application")
            buildConfigField("String", "SERVER_PROTOCOL", "\"http\"")
            buildConfigField("String", "SERVER_URL", "\"mock\"")
            buildConfigField("int", "SERVER_PORT", "42")
        }

        getByName("release") {
            isMinifyEnabled = true
            isDebuggable = false
        }

        getByName("debug") {
            isMinifyEnabled = false
            matchingFallbacks = listOf("release")
        }

        create("mock") {
            isMinifyEnabled = false
            isDebuggable = true
            matchingFallbacks = listOf("debug")
            manifestPlaceholders = mapOf("ApplicationName" to "MockApplication")
        }

        create("localTesting") {
            isMinifyEnabled = false
            isDebuggable = true
            buildConfigField("String", "SERVER_PROTOCOL", "\"http\"")
            buildConfigField("String", "SERVER_URL", "\"localhost\"")
            buildConfigField("int", "SERVER_PORT", "8080")
            matchingFallbacks = listOf("debug")
        }

        all {
            signingConfig = signingConfigs["default"]
        }
    }

    packagingOptions {
        exclude("META-INF/ktor-http.kotlin_module")
        exclude("META-INF/kotlinx-io.kotlin_module")
        exclude("META-INF/atomicfu.kotlin_module")
        exclude("META-INF/ktor-utils.kotlin_module")
        exclude("META-INF/kotlinx-coroutines-io.kotlin_module")
        exclude("META-INF/kotlinx-coroutines-core.kotlin_module")
        exclude("META-INF/kotlinx-serialization-runtime.kotlin_module")
        exclude("META-INF/ktor-http-cio.kotlin_module")
        exclude("META-INF/ktor-client-json.kotlin_module")
        exclude("META-INF/ktor-client-core.kotlin_module")
        exclude("META-INF/ktor-client-serialization.kotlin_module")
    }

}

dependencies {

    val androidxAppCompatVersion: String by project
    val androidxCoreVersion: String by project
    val androidxLegacyVersion: String by project
    val androidxNavigationVersion: String by project
    val androidxLifecycleVersion: String by project
    val materialVersion: String by project
    val constraintLayoutVersion: String by project
    val ktorVersion: String by project
    val kodeinVersion: String by project
    val picassoVersion: String by project

    val junitVersion: String by project
    val espressoVersion: String by project
    val androidTestRunnerVersion: String by project
    val flexibleAdapterVersion: String by project


    implementation(project(":mpp-lib"))

    implementation("androidx.appcompat", "appcompat", androidxAppCompatVersion)
    implementation("androidx.core", "core-ktx", androidxCoreVersion)
    implementation("androidx.legacy", "legacy-support-v4", androidxLegacyVersion)
    implementation("com.google.android.material", "material", materialVersion)
    implementation("androidx.constraintlayout", "constraintlayout", constraintLayoutVersion)
    implementation("androidx.navigation", "navigation-fragment", androidxNavigationVersion)
    implementation("androidx.navigation", "navigation-ui", androidxNavigationVersion)
    implementation("androidx.lifecycle", "lifecycle-extensions", androidxLifecycleVersion)
    implementation("androidx.lifecycle", "lifecycle-viewmodel-ktx", androidxLifecycleVersion)
    implementation("androidx.navigation", "navigation-fragment-ktx", androidxNavigationVersion)
    implementation("androidx.navigation", "navigation-ui-ktx", androidxNavigationVersion)

    implementation("com.squareup.picasso", "picasso", picassoVersion)

    implementation(ktor("client-mock-jvm", ktorVersion))

    implementation("org.kodein.di", "kodein-di-framework-android-x", kodeinVersion)

    implementation("eu.davidea", "flexible-adapter", flexibleAdapterVersion)

    testImplementation("junit", "junit", junitVersion)
    androidTestImplementation("androidx.test", "runner", androidTestRunnerVersion)
    androidTestImplementation("androidx.test.ext", "junit", androidTestRunnerVersion)
    androidTestImplementation("androidx.test.espresso", "espresso-core", espressoVersion)

}

@Suppress("unused")
fun DependencyHandler.ktor(module: String, version: String? = null): Any =
    "io.ktor:ktor-$module${version?.let { ":$version" } ?: ""}"
