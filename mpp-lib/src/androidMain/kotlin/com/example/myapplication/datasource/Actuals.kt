package com.example.myapplication.datasource

import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.storage.FirebaseStorage

actual typealias FirebaseAuth = FirebaseAuth

actual fun getFirebaseAuthInstance() = FirebaseAuth.getInstance()

actual typealias FirebaseStorage = FirebaseStorage

actual fun getFirebaseStorageInstance() = FirebaseStorage.getInstance()