package com.example.myapplication

import com.example.myapplication.BuildTypes.*

enum class BuildTypes {
    RELEASE, MOCK, LOCAL_TESTING, DEBUG
}

val CURRENT_BUILD_TYPE
    get() = when (BuildConfig.BUILD_TYPE) {
        "mock" -> MOCK
        "release" -> RELEASE
        "localTesting" -> LOCAL_TESTING
        "debug" -> DEBUG
        else -> throw IllegalStateException("Current build type ${BuildConfig.BUILD_TYPE} has not been configured.")
    }