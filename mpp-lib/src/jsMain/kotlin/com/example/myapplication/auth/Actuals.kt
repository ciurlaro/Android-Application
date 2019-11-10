package com.example.myapplication.auth

actual typealias FirebaseAuth = externals.firebase.FirebaseAuth

actual fun getFirebaseAuthInstance() = externals.firebase.auth()