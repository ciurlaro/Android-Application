package com.example.myapplication.datasource

actual typealias FirebaseAuth = externals.firebase.FirebaseAuth

actual fun getFirebaseAuthInstance() = externals.firebase.auth()

actual typealias FirebaseStorage = externals.firebase.FirebaseStorage

actual fun getFirebaseStorageInstance() = externals.firebase.storage()