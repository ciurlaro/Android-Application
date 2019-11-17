package com.example.myapplication

enum class BuildTypes {

    RELEASE, MOCK, LOCAL_TESTING, DEBUG;

    companion object {
        fun current() = when (BuildConfig.BUILD_TYPE) {
            "mock" -> MOCK
            "release" -> RELEASE
            "localTesting" -> LOCAL_TESTING
            "debug" -> DEBUG
            else -> throw IllegalStateException("Current build type ${BuildConfig.BUILD_TYPE} has not been configured.")
        }
    }

}