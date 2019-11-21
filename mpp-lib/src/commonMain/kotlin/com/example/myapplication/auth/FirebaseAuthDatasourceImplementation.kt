package com.example.myapplication.auth

import com.example.myapplication.datasource.FirebaseAuthDatasource

expect class FirebaseAuthDatasourceImplementation(firebaseAuth: FirebaseAuth) : FirebaseAuthDatasource