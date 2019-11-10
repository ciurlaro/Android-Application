package com.example.myapplication.auth

import com.google.firebase.auth.FirebaseAuth

actual typealias FirebaseAuth = FirebaseAuth

actual fun getFirebaseAuthInstance() = FirebaseAuth.getInstance()